print("\033[1m\033[34mStep 1/5:\033[0m Import libraries")
import os
import matplotlib.pyplot as plt
import matplotlib
import mplcursors
from collections import Counter


print("\033[1m\033[34mStep 2/5:\033[0m Retrieve paths of data images")
train_dir = './dataset/train'
classes = ['丶','一','丨','丿','乛','𠃌','冫','乙','亠','讠','二','十','厂','𠂇','匚','卜','刂','冖','冂','𠂉','亻','⺁','人','八','乂','勹','刀','力','儿','几','龴','卩','⻖','⻏','又','廴','厶','凵','匕','氵','忄','丬','亡','广','宀','门','辶','工','土','艹','廾','大','尢','寸','扌','弋','巾','口','囗','山','屮','彳','彡','夕','夂','丸','尸','饣','犭','彐','弓','己','女','子','马','幺','纟','巛','小','灬','心','斗','火','文','方','户','礻','王','主','天','韦','耂','廿','木','不','犬','歹','瓦','牙','车','戈','止','日','曰','中','贝','见','父','气','牛','手','毛','攵','片','斤','爪','尺','月','殳','欠','风','氏','比','肀','水','立','疒','穴','衤','𡗗','玉','示','去','𤇾','甘','石','龙','戊','龸','业','目','田','由','申','罒','皿','钅','矢','禾','白','瓜','鸟','皮','癶','矛','疋','羊','龹','米','齐','衣','亦','耳','臣','𢦏','西','朿','亚','而','页','至','光','虍','虫','缶','耒','舌','竹','臼','自','血','舟','羽','艮','言','辛','辰','麦','走','赤','豆','束','酉','豕','里','足','采','豸','谷','身','角','青','龺','雨','非','齿','黾','隹','金','鱼','音','革','是','骨','香','鬼','食','高','鬲','髟','麻','鹿','黑','鼓','鼠','鼻','〇','乡','判','卵','凸','甲','民']
print("Amount of classes: "+ str(len(classes)))

def get_image_paths(root_dir):
  image_paths = []

  for root, dirs, files in os.walk(root_dir):
    image_files = [f for f in files if f.endswith('.png')]
    for image_file in image_files:
      image_paths.append(os.path.join(root, image_file))

  return image_paths


train_image_paths = get_image_paths(train_dir)
print("Amount of training images found: " + str(len(train_image_paths)))

print("\033[1m\033[34mStep 3/5:\033[0m Define class distribution")
sum_labels = 0
label_counts = Counter()
for path in train_image_paths:
  label_str = os.path.splitext(os.path.basename(path))[0].split('-')[0]  # Extract the label
  for label in label_str:
    label_counts[label] += 1
    sum_labels +=1
print("Class distribution:", label_counts)

print("\033[1m\033[34mStep 4/5:\033[0m Visualize class distribution")
matplotlib.rcParams['font.family'] = 'STHeiti'
sorted_labels = sorted(label_counts.items(), key=lambda x: x[1], reverse=True)
labels, counts = zip(*sorted_labels)

labels_with_one_data_image_count = [label for label, count in label_counts.items() if count <= 1]
labels_with_two_data_image_count = [label for label, count in label_counts.items() if count <= 2 and count > 1]
labels_with_less_equal_five_data_image_count = [label for label, count in label_counts.items() if count <= 5 and count > 2]
labels_with_less_equal_ten_data_image_count = [label for label, count in label_counts.items() if count <= 10 and count > 5]
limit = len(classes) - len(labels_with_one_data_image_count) - len(labels_with_two_data_image_count) - len(labels_with_less_equal_five_data_image_count) - len(labels_with_less_equal_ten_data_image_count)

labels = labels[:limit]
counts = counts[:limit]
labels_list = list(labels)
labels_list.append('<=10 img ('+str(len(labels_with_less_equal_ten_data_image_count))+')')
labels_list.append('<=5 img ('+str(len(labels_with_less_equal_five_data_image_count))+')')
labels_list.append('2 img ('+str(len(labels_with_two_data_image_count))+')')
labels_list.append('radicals only ('+str(len(labels_with_one_data_image_count))+')')
labels = tuple(labels_list)
counts_list = list(counts)
counts_list.append(10)
counts_list.append(5)
counts_list.append(2)
counts_list.append(1)
counts = tuple(counts_list)


fig = plt.figure(figsize=(10, 6))
bars = plt.bar(labels, counts, color='blue')

cursor = mplcursors.cursor(bars, hover=True)
cursor.connect("add", lambda sel: sel.annotation.set_text(f'{labels[int(sel.target[0])]}: {sel.target[1]}'))
cursor.connect("add", lambda sel: sel.annotation.set_bbox(dict(facecolor='white', edgecolor='grey', boxstyle='round,pad=0.3')))

fig.canvas.manager.set_window_title("Class Distribution of Labels")
plt.xlabel('Labels')
plt.ylabel('Frequency')
plt.title('Class Distribution of Labels')
plt.xticks(rotation=60)
plt.tight_layout()
plt.show()

print("\033[1m\033[34mStep 5/5:\033[0m Summarize")
print("Amount of labels within training images: " + str(sum_labels))
print(str(limit) + " labels have more than 10 data images")
print(str(len(labels_with_less_equal_ten_data_image_count)) + " labels have <=10 data images")
print(str(len(labels_with_less_equal_five_data_image_count)) + " labels have <=5 data images")
print(str(len(labels_with_two_data_image_count)) + " labels have only two data images")
print(str(len(labels_with_one_data_image_count)) + " labels have only radical data image")
