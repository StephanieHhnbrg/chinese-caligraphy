print("\033[1m\033[35mStep 1/6:\033[0m Import libraries")
import tensorflow as tf
from tensorflow.keras import layers, models, Input
from tensorflow.keras.callbacks import ModelCheckpoint, EarlyStopping
from tensorflow.keras.preprocessing.image import ImageDataGenerator, load_img, img_to_array
from tensorflow.keras.utils import Sequence
import numpy as np
import os
from collections import Counter


tf.config.set_visible_devices([], 'GPU')
os.environ["CUDA_VISIBLE_DEVICES"] = "-1"

print("\033[1m\033[35mStep 2/6:\033[0m Load datasets")
train_dir = './dataset/train'
test_dir = './dataset/test'
classes = ['丶','一','丨','丿','乛','𠃌','冫','乙','亠','讠','二','十','厂','𠂇','匚','卜','刂','冖','冂','𠂉','亻','⺁','人','八','乂','勹','刀','力','儿','几','龴','卩','⻖','⻏','又','廴','厶','凵','匕','氵','忄','丬','亡','广','宀','门','辶','工','土','艹','廾','大','尢','寸','扌','弋','巾','口','囗','山','屮','彳','彡','夕','夂','丸','尸','饣','犭','彐','弓','己','女','子','马','幺','纟','巛','小','灬','心','斗','火','文','方','户','礻','王','主','天','韦','耂','廿','木','不','犬','歹','瓦','牙','车','戈','止','日','曰','中','贝','见','父','气','牛','手','毛','攵','片','斤','爪','尺','月','殳','欠','风','氏','比','肀','水','立','疒','穴','衤','𡗗','玉','示','去','𤇾','甘','石','龙','戊','龸','业','目','田','由','申','罒','皿','钅','矢','禾','白','瓜','鸟','皮','癶','矛','疋','羊','龹','米','齐','衣','亦','耳','臣','𢦏','西','朿','亚','而','页','至','光','虍','虫','缶','耒','舌','竹','臼','自','血','舟','羽','艮','言','辛','辰','麦','走','赤','豆','束','酉','豕','里','足','采','豸','谷','身','角','青','龺','雨','非','齿','黾','隹','金','鱼','音','革','是','骨','香','鬼','食','高','鬲','髟','麻','鹿','黑','鼓','鼠','鼻','〇','乡','判','卵','凸','甲','民']
print("Amount of classes getting trained: "+ str(len(classes)))
class MultiLabelDataGenerator(Sequence):
  def __init__(self, image_paths, batch_size, image_size, class_list, **kwargs):
    super().__init__(**kwargs)
    self.image_paths = image_paths
    self.batch_size = batch_size
    self.image_size = image_size
    self.class_list = class_list
    self.class_to_idx = {cls: idx for idx, cls in enumerate(class_list)}  # Mapping classes to indices
  def __len__(self):
    return int(np.floor(len(self.image_paths) / self.batch_size))

  def __getitem__(self, index):
    batch_paths = self.image_paths[index * self.batch_size:(index + 1) * self.batch_size]

    # Initialize a list for the images and labels
    images = []
    labels = []

    for path in batch_paths:
      # Load the image and preprocess it
      image = load_img(path, target_size=self.image_size, color_mode='grayscale')
      image_array = img_to_array(image) / 255.0

      # Extract label from the image filename (e.g., 'abc.png' -> 'abc')
      filename = os.path.basename(path)
      label_str = os.path.splitext(filename)[0]  # Remove the file extension
      composition_str = label_str.split('-')[0]

      # Convert the label string (e.g., 'abc') to a binary vector
      label_vector = np.zeros(len(self.class_list))  # Initialize a zero vector for the labels
      for comp in composition_str:  # For each character in the label (e.g., 'abc')
        if comp in self.class_to_idx:
          label_vector[self.class_to_idx[comp]] = 1  # Set corresponding index to 1

      # Append the processed image and label to the lists
      images.append(image_array)
      labels.append(label_vector)

    return np.array(images), np.array(labels)

def get_image_paths(root_dir):
  image_paths = []

  for root, dirs, files in os.walk(root_dir):
    image_files = [f for f in files if f.endswith('.png')]
    for image_file in image_files:
      image_paths.append(os.path.join(root, image_file))

  return image_paths


train_image_paths = get_image_paths(train_dir)
train_gen = MultiLabelDataGenerator(train_image_paths, batch_size=32, image_size=(100, 100), class_list = classes)
print("Amount of training images found: " + str(len(train_image_paths)))

test_image_paths = get_image_paths(test_dir)
test_gen = MultiLabelDataGenerator(train_image_paths, batch_size=32, image_size=(100, 100), class_list = classes)
# TODO change to test_image_paths as soon as data split happened


label_counts = Counter()
for path in train_image_paths:
  label_str = os.path.splitext(os.path.basename(path))[0].split('-')[0]  # Extract the label
  for label in label_str:
    label_counts[label] += 1
print("Class distribution:", label_counts)


print("\033[1m\033[35mStep 3/6:\033[0m Define model and callbacks")
model = models.Sequential([
  # Input layer
  Input(shape=(100, 100, 1)),

  # First convolutional layer
  layers.Conv2D(32, (7, 7), activation='relu'),
  layers.MaxPooling2D((2, 2)),
  layers.Dropout(0.25),

  # Second convolutional layer
  layers.Conv2D(64, (7, 7), activation='relu'),
  layers.MaxPooling2D((2, 2)),
  layers.Dropout(0.25),

  # Third convolutional layer
  layers.Conv2D(128, (7, 7), activation='relu'),
  layers.MaxPooling2D((2, 2)),
  layers.Dropout(0.25),

  # Flatten layer
  layers.Flatten(),

  # Dense (fully connected) layer
  layers.Dense(128, activation='relu'),
  layers.Dropout(0.5),

  # Output layer - Softmax + Sigmoid activation func applied for Multi-label classification
  layers.Dense(len(classes), activation='sigmoid')
])

checkpoint_callback = ModelCheckpoint(
  "chanzi_model.h5",      # Path to save the model - .h5 format is needed for the conversion later on (see SetUp step 4)
  save_best_only=True,
  monitor='val_loss',
  verbose=1
)

early_stopping_callback = EarlyStopping(
  monitor='val_loss',     # Stop training if validation loss doesn't improve
  patience=5,             # Number of epochs to wait before stopping
  verbose=1
)

print("\033[1m\033[35mStep 4/6:\033[0m Compile model")
model.compile(optimizer='adam',
              loss='binary_crossentropy',
              metrics=['accuracy'])

print("\033[1m\033[35mStep 5/6:\033[0m Train model")
model.fit(
  train_gen,
  epochs=50,
  validation_data=test_gen,
  verbose=2,
  callbacks=[checkpoint_callback, early_stopping_callback]
)

print("\033[1m\033[35mStep 6/6:\033[0m Evaluate model")
test_loss, test_accuracy = model.evaluate(test_gen, verbose=2)
print(f"Test Loss: {test_loss}") # how well the model's predictions match the true labels
print(f"Test Accuracy: {test_accuracy}") # proportion of correct predictions out of all predictions made

print("Make predictions")
predictions = model.predict(test_gen)

def get_predicted_classes(predictions, threshold=0.5):
  return (predictions > threshold).astype("int32")


predicted_classes = get_predicted_classes(predictions)
predicted_class_counts = np.sum(predicted_classes, axis=0)
print("Predicted class counts:", predicted_class_counts) # frequencies of predicted class to discover class imbalance issues

for i, (image_path) in enumerate(test_image_paths):
  character = image_path.split("/")[4].replace(".png","")

  predicted_label = predicted_classes[i]
  predicted_class_names = [classes[i] for i in range(len(predicted_label)) if predicted_label[i] == 1]

  print(f'#{i} input: {character} -> output: {", ".join(predicted_class_names)}')
  if i == (len(classes)-1):
    break
