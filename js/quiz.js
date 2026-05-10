/**
 * 答题闯关页面JavaScript文件
 */

// 简单难度题目库
const easyQuizData = [
  {
    question: '我国共有多少个民族？',
    options: ['55个', '56个', '57个', '58个'],
    answer: 1,
    explanation: '我国是统一的多民族国家，共有56个民族，其中汉族人口最多，其他55个为少数民族。'
  },
  {
    question: '泼水节是哪个民族的传统节日？',
    options: ['傣族', '蒙古族', '彝族', '壮族'],
    answer: 0,
    explanation: '泼水节是傣族的新年，一般在傣历六月中旬（公历4月中旬）举行，人们通过泼水表达祝福，洗去过去一年的不顺。'
  },
  {
    question: '那达慕大会是哪个民族的传统盛会？',
    options: ['藏族', '蒙古族', '维吾尔族', '朝鲜族'],
    answer: 1,
    explanation: '那达慕大会是蒙古族历史悠久的传统节日，主要活动有摔跤、赛马、射箭等，是草原上的盛大庆典。'
  },
  {
    question: '"三月三"歌圩是哪个民族的传统节日？',
    options: ['苗族', '壮族', '侗族', '瑶族'],
    answer: 1,
    explanation: '壮族"三月三"歌圩是国家级非物质文化遗产，人们对歌、抛绣球、吃五色糯米饭，是壮族最隆重的节日之一。'
  },
  {
    question: '马头琴是哪个民族的传统乐器？',
    options: ['哈萨克族', '蒙古族', '柯尔克孜族', '塔吉克族'],
    answer: 1,
    explanation: '马头琴是蒙古族的代表性乐器，因琴杆上端雕有马头而得名，音色深沉、悠扬，常用于独奏、合奏或伴奏。'
  },
  {
    question: '《格萨尔王传》是哪个民族的英雄史诗？',
    options: ['藏族', '蒙古族', '柯尔克孜族', '满族'],
    answer: 0,
    explanation: '《格萨尔王传》是藏族人民集体创作的英雄史诗，也是世界上最长的史诗之一，讲述了格萨尔王降妖伏魔、造福百姓的故事。'
  },
  {
    question: '火把节是哪个民族的传统节日？',
    options: ['白族', '彝族', '傈僳族', '以上都是'],
    answer: 3,
    explanation: '火把节是彝族、白族、傈僳族、纳西族等多个西南少数民族的重要节日，人们点燃火把，祈求风调雨顺、五谷丰登。'
  },
  {
    question: '"花儿"是哪个民族的民间歌谣？',
    options: ['回族', '东乡族', '土族', '以上都是'],
    answer: 3,
    explanation: '"花儿"是流行于甘肃、青海、宁夏等地区的回族、东乡族、土族、撒拉族等民族的民间歌谣，被誉为"西北之魂"。'
  },
  {
    question: '我国人口最多的少数民族是？',
    options: ['满族', '壮族', '回族', '维吾尔族'],
    answer: 1,
    explanation: '根据人口普查数据，壮族是我国人口最多的少数民族，主要聚居在广西壮族自治区。'
  },
  {
    question: '"冬不拉"是哪个民族的传统弹拨乐器？',
    options: ['哈萨克族', '柯尔克孜族', '塔吉克族', '乌孜别克族'],
    answer: 0,
    explanation: '冬不拉是哈萨克族的传统乐器，音色明快、节奏感强，常用于独奏、合奏或为舞蹈伴奏。'
  },
  {
    question: '"唐卡"是哪个民族的传统绘画艺术？',
    options: ['藏族', '蒙古族', '门巴族', '珞巴族'],
    answer: 0,
    explanation: '唐卡是藏族的传统卷轴画，题材多为宗教、历史、文化等，色彩鲜艳、工艺精湛，是藏文化的重要载体。'
  },
  {
    question: '"芦笙"是哪个民族的传统乐器？',
    options: ['苗族', '侗族', '水族', '以上都是'],
    answer: 3,
    explanation: '芦笙是苗族、侗族、水族、仡佬族等西南少数民族的传统乐器，常用于节日庆典、歌舞表演等场合。'
  },
  {
    question: '"开斋节"是哪个民族的重要宗教节日？',
    options: ['回族', '维吾尔族', '哈萨克族', '以上都是'],
    answer: 3,
    explanation: '开斋节是回族、维吾尔族、哈萨克族、东乡族等信仰伊斯兰教少数民族的重要节日，标志着斋月的结束。'
  },
  {
    question: '"长鼓舞"是哪个民族的传统舞蹈？',
    options: ['朝鲜族', '瑶族', '壮族', '苗族'],
    answer: 0,
    explanation: '长鼓舞是朝鲜族的代表性舞蹈，舞者手持长鼓，边击边舞，动作轻盈、优美，展现了朝鲜族人民的乐观精神。'
  },
  {
    question: '我国少数民族最多的省份是？',
    options: ['新疆', '云南', '广西', '内蒙古'],
    answer: 1,
    explanation: '云南省是我国少数民族种类最多的省份，有25个世居少数民族，其中15个为云南特有民族。'
  },
  {
    question: '维吾尔族的传统美食"馕"是什么类型的食物？',
    options: ['面饼', '米饭', '面条', '粥'],
    answer: 0,
    explanation: '馕是维吾尔族的传统面饼，是维吾尔族人民日常生活中不可缺少的主食。'
  },
  {
    question: '蒙古族的传统住所叫什么？',
    options: ['帐篷', '蒙古包', '毡房', '木屋'],
    answer: 1,
    explanation: '蒙古包是蒙古族的传统住所，便于拆卸和搬迁，适应游牧生活。'
  },
  {
    question: '藏族的"哈达"是什么？',
    options: ['一种食物', '一种乐器', '一种礼仪用的丝巾', '一种舞蹈'],
    answer: 2,
    explanation: '哈达是藏族人民表达敬意和祝福的礼仪用品，通常为白色丝巾，象征纯洁和吉祥。'
  },
  {
    question: '苗族的"银饰"主要用于什么场合？',
    options: ['日常生活', '节日庆典和婚礼', '宗教仪式', '商业交易'],
    answer: 1,
    explanation: '苗族银饰主要用于节日庆典和婚礼等重要场合，是苗族文化的重要象征。'
  },
  {
    question: '壮族的"铜鼓"在古代主要用途是什么？',
    options: ['乐器', '权力象征和祭祀用具', '货币', '农具'],
    answer: 1,
    explanation: '壮族铜鼓在古代是权力和财富的象征，主要用于祭祀、战争和集会等重要场合。'
  },
  {
    question: '傣族的"孔雀舞"模仿的是什么动物？',
    options: ['凤凰', '孔雀', '天鹅', '仙鹤'],
    answer: 1,
    explanation: '傣族孔雀舞模仿孔雀的动作和姿态，是傣族最具代表性的舞蹈之一。'
  },
  {
    question: '朝鲜族的传统服饰叫什么？',
    options: ['汉服', '旗袍', '韩服', '藏袍'],
    answer: 2,
    explanation: '朝鲜族的传统服饰称为韩服，色彩鲜艳，款式优美，是朝鲜族文化的重要组成部分。'
  },
  {
    question: '彝族的"火把节"通常持续几天？',
    options: ['1天', '3天', '7天', '10天'],
    answer: 1,
    explanation: '彝族火把节通常持续3天，期间人们点燃火把，举行各种庆祝活动。'
  },
  {
    question: '维吾尔族的"十二木卡姆"是什么？',
    options: ['传统舞蹈', '传统音乐套曲', '传统服饰', '传统建筑'],
    answer: 1,
    explanation: '十二木卡姆是维吾尔族的传统音乐套曲，是世界非物质文化遗产。'
  },
  {
    question: '白族的"三道茶"是哪三道？',
    options: ['绿茶、红茶、花茶', '苦茶、甜茶、回味茶', '清茶、浓茶、淡茶', '热茶、温茶、凉茶'],
    answer: 1,
    explanation: '白族三道茶分别是苦茶、甜茶、回味茶，寓意人生先苦后甜再回味。'
  },
  {
    question: '侗族的"鼓楼"主要用途是什么？',
    options: ['居住', '议事和娱乐', '储存粮食', '宗教祭祀'],
    answer: 1,
    explanation: '侗族鼓楼是侗族村寨的标志性建筑，主要用于议事、娱乐和社交活动。'
  },
  {
    question: '哈萨克族的传统体育活动"姑娘追"是什么？',
    options: ['赛马', '骑马追逐游戏', '摔跤', '射箭'],
    answer: 1,
    explanation: '姑娘追是哈萨克族的传统骑马追逐游戏，青年男女骑马追逐，表达爱意。'
  },
  {
    question: '傈僳族的"刀杆节"主要活动是什么？',
    options: ['爬刀杆', '赛马', '摔跤', '射箭'],
    answer: 0,
    explanation: '刀杆节是傈僳族的传统节日，主要活动是上刀山、下火海等惊险表演。'
  },
  {
    question: '纳西族的"东巴文"属于什么类型的文字？',
    options: ['拼音文字', '象形文字', '楔形文字', '甲骨文'],
    answer: 1,
    explanation: '东巴文是纳西族使用的象形文字，是目前世界上唯一还在使用的象形文字系统。'
  },
  {
    question: '土家族的"摆手舞"主要流传于哪个地区？',
    options: ['湖北', '湖南湘西', '重庆', '贵州'],
    answer: 1,
    explanation: '摆手舞是土家族的传统舞蹈，主要流传于湖南湘西土家族苗族自治州。'
  },
  {
    question: '黎族的"船形屋"为什么设计成船形？',
    options: ['为了纪念祖先渡海而来', '为了防洪', '为了美观', '为了通风'],
    answer: 0,
    explanation: '黎族船形屋的设计是为了纪念祖先从海上渡海来到海南岛的传说。'
  },
  {
    question: '瑶族的"盘王节"是为了纪念谁？',
    options: ['盘古', '盘瓠', '盘古大帝', '盘石'],
    answer: 1,
    explanation: '盘王节是瑶族纪念祖先盘瓠的传统节日，是瑶族最重要的节日之一。'
  },
  {
    question: '畲族的"三月三"节日主要活动是什么？',
    options: ['对歌', '赛马', '摔跤', '射箭'],
    answer: 0,
    explanation: '畲族三月三主要活动是对歌，青年男女通过对歌寻找伴侣。'
  },
  {
    question: '拉祜族的"葫芦节"与什么有关？',
    options: ['葫芦是拉祜族的图腾', '葫芦是食物', '葫芦是乐器', '葫芦是工具'],
    answer: 0,
    explanation: '葫芦是拉祜族的图腾，拉祜族认为人类是从葫芦里走出来的。'
  },
  {
    question: '水族的文字"水书"主要用于什么？',
    options: ['日常书写', '占卜和记录历法', '商业交易', '官方文书'],
    answer: 1,
    explanation: '水书是水族的文字，主要用于占卜、记录历法和选择吉日等。'
  },
  {
    question: '佤族的"木鼓"在文化中有什么重要意义？',
    options: ['娱乐工具', '通神工具，象征吉祥', '战争武器', '农具'],
    answer: 1,
    explanation: '木鼓在佤族文化中是通神的工具，象征着吉祥和力量，是重要的文化符号。'
  },
  {
    question: '高山族的"丰年祭"是为了庆祝什么？',
    options: ['战争胜利', '丰收', '新年', '婚礼'],
    answer: 1,
    explanation: '丰年祭是高山族庆祝丰收的重要节日，表达对祖先和自然的感恩。'
  },
  {
    question: '赫哲族的"伊玛堪"是什么形式的艺术？',
    options: ['说唱文学', '舞蹈', '绘画', '建筑'],
    answer: 0,
    explanation: '伊玛堪是赫哲族特有的说唱文学形式，讲述英雄故事，被列入联合国非物质文化遗产。'
  },
  {
    question: '柯尔克孜族的"玛纳斯"与藏族的"格萨尔"、蒙古族的"江格尔"并称为什么？',
    options: ['中国三大史诗', '世界三大史诗', '亚洲三大史诗', '草原三大史诗'],
    answer: 0,
    explanation: '《玛纳斯》《格萨尔》《江格尔》并称为中国三大史诗，都是口头传统史诗的杰作。'
  },
  {
    question: '蒙古族的"呼麦"唱法有什么特点？',
    options: ['一个人同时唱出两个声部', '多人合唱', '只用假声', '只用真声'],
    answer: 0,
    explanation: '呼麦是蒙古族特有的唱法，一个人可以同时唱出两个声部（低音基音和高音泛音）。'
  },
  {
    question: '回族的"清真"标志代表什么？',
    options: ['食品质量', '符合伊斯兰教规', '价格合理', '产地正宗'],
    answer: 1,
    explanation: '清真标志表示食品符合伊斯兰教规，回族人民可以放心食用。'
  },
  {
    question: '藏族的"转经筒"有什么作用？',
    options: ['装饰品', '祈福和积德', '计时工具', '乐器'],
    answer: 1,
    explanation: '转经筒是藏族人民祈福和积德的工具，转动一次相当于念诵一遍经文。'
  },
  {
    question: '傣族的"贝叶经"是用什么材料制作的？',
    options: ['纸张', '贝多罗树叶', '丝绸', '竹简'],
    answer: 1,
    explanation: '贝叶经是傣族用贝多罗树叶刻写的佛教经典，具有极高的文化和历史价值。'
  },
  {
    question: '彝族的"毕摩"在彝族社会中担任什么角色？',
    options: ['战士', '祭司和知识分子', '医生', '商人'],
    answer: 1,
    explanation: '毕摩是彝族的祭司，掌握彝族文字和传统文化，是彝族社会的知识分子和精神领袖。'
  },
  {
    question: '朝鲜族的"阿里郎"歌曲主要表达什么情感？',
    options: ['欢快喜庆', '离别和思念之情', '战争场面', '劳动场景'],
    answer: 1,
    explanation: '阿里郎是朝鲜族代表性民歌，主要表达离别和思念之情，被列入联合国非物质文化遗产。'
  },
  {
    question: '壮族的"壮锦"是什么？',
    options: ['一种乐器', '一种织锦', '一种舞蹈', '一种建筑'],
    answer: 1,
    explanation: '壮锦是壮族的传统织锦，色彩鲜艳，图案精美，是壮族文化的重要象征。'
  },
  {
    question: '土家族的"西兰卡普"是什么？',
    options: ['一种舞蹈', '一种织锦', '一种歌曲', '一种建筑'],
    answer: 1,
    explanation: '西兰卡普是土家族的传统织锦，色彩鲜艳，图案精美，是土家族文化的瑰宝。'
  },
  {
    question: '藏族的"磕长头"朝圣方式有什么特点？',
    options: ['步行前往', '一步一跪一磕头', '骑马前往', '乘车前往'],
    answer: 1,
    explanation: '磕长头是藏族信徒的朝圣方式，一步一跪一磕头，表达对信仰的虔诚。'
  },
  {
    question: '维吾尔族的"肉孜节"是什么节日？',
    options: ['新年', '开斋节', '宰牲节', '丰收节'],
    answer: 1,
    explanation: '肉孜节是维吾尔族的开斋节，是伊斯兰教的重要节日，标志着斋月的结束。'
  },
  {
    question: '蒙古族的"白节"相当于什么节日？',
    options: ['春节', '中秋节', '端午节', '清明节'],
    answer: 0,
    explanation: '白节是蒙古族的春节，是蒙古族最隆重的传统节日。'
  }
];

// 中等难度题目库
const mediumQuizData = [
  {
    question: '傣族的传统节日"泼水节"象征着什么？',
    options: ['祈求丰收', '洗去旧年晦气，迎接新年', '纪念祖先', '庆祝战争胜利'],
    answer: 1,
    explanation: '泼水节是傣族的新年节日，象征着洗去旧年的晦气，迎接新年的到来。'
  },
  {
    question: '回族的主要宗教信仰是什么？',
    options: ['佛教', '基督教', '伊斯兰教', '道教'],
    answer: 2,
    explanation: '回族主要信仰伊斯兰教，这也是回族文化的重要组成部分。'
  },
  {
    question: '壮族的特色建筑"干栏"有什么特点？',
    options: ['地下建筑', '半地穴式建筑', '楼上住人，楼下养畜', '完全木结构'],
    answer: 2,
    explanation: '干栏是壮族的传统建筑形式，特点是楼上住人，楼下养畜，适应南方湿热气候。'
  },
  {
    question: '白族的"三道茶"分别代表什么含义？',
    options: ['苦、甜、回味', '酸、甜、苦', '浓、淡、清', '热、温、凉'],
    answer: 0,
    explanation: '白族三道茶分别是苦茶、甜茶、回味茶，寓意人生先苦后甜再回味。'
  },
  {
    question: '哈尼族的"梯田"主要分布在哪个地区？',
    options: ['广西', '云南', '贵州', '四川'],
    answer: 1,
    explanation: '哈尼族梯田主要分布在云南红河哈尼族彝族自治州，是世界文化遗产。'
  },
  {
    question: '哈萨克族的传统民居"毡房"在哈萨克语中叫什么？',
    options: ['蒙古包', '格干', '毡房', '帐篷'],
    answer: 1,
    explanation: '哈萨克族的传统民居在哈萨克语中称为"格干"，是一种便于拆卸移动的毡房。'
  },
  {
    question: '黎族的"船形屋"为什么设计成船形？',
    options: ['为了纪念祖先渡海而来', '为了防洪', '为了美观', '为了通风'],
    answer: 0,
    explanation: '黎族船形屋的设计是为了纪念祖先从海上渡海来到海南岛的传说。'
  },
  {
    question: '傈僳族的"刀杆节"主要活动是什么？',
    options: ['爬刀杆', '赛马', '摔跤', '射箭'],
    answer: 0,
    explanation: '刀杆节是傈僳族的传统节日，主要活动是上刀山、下火海等惊险表演。'
  },
  {
    question: '佤族的"木鼓"在文化中有什么重要意义？',
    options: ['娱乐工具', '通神工具，象征吉祥', '战争武器', '农具'],
    answer: 1,
    explanation: '木鼓在佤族文化中是通神的工具，象征着吉祥和力量，是重要的文化符号。'
  },
  {
    question: '高山族的"丰年祭"是为了庆祝什么？',
    options: ['战争胜利', '丰收', '新年', '婚礼'],
    answer: 1,
    explanation: '丰年祭是高山族庆祝丰收的重要节日，表达对祖先和自然的感恩。'
  },
  {
    question: '土家族的"西兰卡普"是什么？',
    options: ['一种舞蹈', '一种织锦', '一种歌曲', '一种建筑'],
    answer: 1,
    explanation: '西兰卡普是土家族的传统织锦，色彩鲜艳，图案精美，是土家族文化的瑰宝。'
  },
  {
    question: '瑶族的"盘王节"是为了纪念谁？',
    options: ['盘古', '盘瓠', '盘古大帝', '盘石'],
    answer: 1,
    explanation: '盘王节是瑶族纪念祖先盘瓠的传统节日，是瑶族最重要的节日之一。'
  },
  {
    question: '畲族的"三月三"节日主要活动是什么？',
    options: ['对歌', '赛马', '摔跤', '射箭'],
    answer: 0,
    explanation: '畲族三月三主要活动是对歌，青年男女通过对歌寻找伴侣。'
  },
  {
    question: '拉祜族的"葫芦节"与什么有关？',
    options: ['葫芦是拉祜族的图腾', '葫芦是食物', '葫芦是乐器', '葫芦是工具'],
    answer: 0,
    explanation: '葫芦是拉祜族的图腾，拉祜族认为人类是从葫芦里走出来的。'
  },
  {
    question: '水族的文字"水书"主要用于什么？',
    options: ['日常书写', '占卜和记录历法', '商业交易', '官方文书'],
    answer: 1,
    explanation: '水书是水族的文字，主要用于占卜、记录历法和选择吉日等。'
  },
  {
    question: '侗族的"风雨桥"有什么特点？',
    options: ['只有桥面', '桥上有亭阁，可避风雨', '完全石质结构', '只能行人通过'],
    answer: 1,
    explanation: '风雨桥是侗族的特色建筑，桥上有亭阁，可供行人避风雨、休息。'
  },
  {
    question: '羌族的"碉楼"主要用于什么？',
    options: ['居住', '防御和储存', '宗教祭祀', '商业交易'],
    answer: 1,
    explanation: '羌族碉楼主要用于防御敌人入侵和储存粮食，是羌族建筑的重要代表。'
  },
  {
    question: '毛南族的"花竹帽"是什么？',
    options: ['一种帽子', '一种乐器', '一种舞蹈', '一种建筑'],
    answer: 0,
    explanation: '花竹帽是毛南族的传统手工艺品，用竹篾编织而成，图案精美。'
  },
  {
    question: '仫佬族的"依饭节"主要庆祝什么？',
    options: ['丰收', '新年', '婚礼', '成人礼'],
    answer: 0,
    explanation: '依饭节是仫佬族庆祝丰收的节日，人们祭祀祖先，祈求来年风调雨顺。'
  },
  {
    question: '京族的"哈节"主要活动是什么？',
    options: ['唱歌', '赛马', '摔跤', '射箭'],
    answer: 0,
    explanation: '哈节是京族的传统节日，主要活动是唱歌、跳舞，庆祝丰收。'
  },
  {
    question: '仡佬族的"吃新节"是为了庆祝什么？',
    options: ['新年', '丰收', '婚礼', '成人礼'],
    answer: 1,
    explanation: '吃新节是仡佬族庆祝丰收的节日，人们品尝新米，感谢大自然的馈赠。'
  },
  {
    question: '锡伯族的"西迁节"是为了纪念什么？',
    options: ['战争胜利', '祖先西迁', '丰收', '新年'],
    answer: 1,
    explanation: '西迁节是锡伯族纪念祖先从东北西迁至新疆的历史事件。'
  },
  {
    question: '塔吉克族的"鹰舞"模仿的是什么动物？',
    options: ['凤凰', '鹰', '天鹅', '仙鹤'],
    answer: 1,
    explanation: '鹰舞是塔吉克族的传统舞蹈，模仿鹰的动作，展现塔吉克族人民的勇敢。'
  },
  {
    question: '乌孜别克族的"手鼓舞"有什么特点？',
    options: ['只用脚打节拍', '边击鼓边跳舞', '只用乐器伴奏', '无伴奏'],
    answer: 1,
    explanation: '手鼓舞是乌孜别克族的传统舞蹈，舞者边击鼓边跳舞，节奏欢快。'
  },
  {
    question: '俄罗斯族的"巴斯克节"相当于什么节日？',
    options: ['新年', '复活节', '圣诞节', '国庆节'],
    answer: 1,
    explanation: '巴斯克节是俄罗斯族的复活节，是俄罗斯族最重要的宗教节日之一。'
  },
  {
    question: '鄂温克族的"瑟宾节"主要活动是什么？',
    options: ['赛马', '歌舞表演', '摔跤', '射箭'],
    answer: 1,
    explanation: '瑟宾节是鄂温克族的传统节日，主要活动是歌舞表演，庆祝丰收。'
  },
  {
    question: '德昂族的"浇花节"主要活动是什么？',
    options: ['浇水', '浇花', '赛马', '摔跤'],
    answer: 1,
    explanation: '浇花节是德昂族的传统节日，人们浇花祈福，庆祝新年。'
  },
  {
    question: '保安族的"保安腰刀"是什么？',
    options: ['一种乐器', '一种刀具', '一种舞蹈', '一种建筑'],
    answer: 1,
    explanation: '保安腰刀是保安族的传统手工艺品，工艺精湛，是保安族文化的象征。'
  },
  {
    question: '裕固族的"剪马鬃节"与什么有关？',
    options: ['马匹养殖', '农业丰收', '宗教祭祀', '商业交易'],
    answer: 0,
    explanation: '剪马鬃节是裕固族的传统节日，与马匹养殖有关，人们剪马鬃祈福。'
  },
  {
    question: '京族主要聚居在哪个地区？',
    options: ['广西', '云南', '贵州', '四川'],
    answer: 0,
    explanation: '京族主要聚居在广西壮族自治区，是中国唯一的海洋民族。'
  },
  {
    question: '独龙族的"卡雀哇节"主要活动是什么？',
    options: ['剽牛祭祀', '赛马', '摔跤', '射箭'],
    answer: 0,
    explanation: '卡雀哇节是独龙族的传统节日，主要活动是剽牛祭祀，庆祝丰收。'
  },
  {
    question: '鄂伦春族的"古伦木沓节"主要活动是什么？',
    options: ['篝火晚会', '赛马', '摔跤', '射箭'],
    answer: 0,
    explanation: '古伦木沓节是鄂伦春族的传统节日，主要活动是篝火晚会，庆祝丰收。'
  },
  {
    question: '赫哲族主要聚居在哪个地区？',
    options: ['黑龙江', '吉林', '辽宁', '内蒙古'],
    answer: 0,
    explanation: '赫哲族主要聚居在黑龙江省，是中国北方唯一的渔猎民族。'
  },
  {
    question: '门巴族主要聚居在哪个地区？',
    options: ['西藏', '青海', '四川', '云南'],
    answer: 0,
    explanation: '门巴族主要聚居在西藏自治区，与藏族文化有密切联系。'
  },
  {
    question: '珞巴族主要聚居在哪个地区？',
    options: ['西藏', '青海', '四川', '云南'],
    answer: 0,
    explanation: '珞巴族主要聚居在西藏自治区，是中国人口最少的民族之一。'
  },
  {
    question: '基诺族的"特懋克节"主要庆祝什么？',
    options: ['新年', '丰收', '婚礼', '成人礼'],
    answer: 0,
    explanation: '特懋克节是基诺族的新年，人们举行各种庆祝活动，祈求来年风调雨顺。'
  },
  {
    question: '怒族的"仙女节"主要活动是什么？',
    options: ['祭祀仙女', '赛马', '摔跤', '射箭'],
    answer: 0,
    explanation: '仙女节是怒族的传统节日，主要活动是祭祀仙女，祈求平安幸福。'
  },
  {
    question: '阿昌族的"窝罗节"主要活动是什么？',
    options: ['歌舞表演', '赛马', '摔跤', '射箭'],
    answer: 0,
    explanation: '窝罗节是阿昌族的传统节日，主要活动是歌舞表演，庆祝丰收。'
  },
  {
    question: '普米族的"吾昔节"相当于什么节日？',
    options: ['新年', '丰收节', '婚礼', '成人礼'],
    answer: 0,
    explanation: '吾昔节是普米族的新年，人们举行各种庆祝活动，祈求来年风调雨顺。'
  },
  {
    question: '布朗族的"桑刊节"主要活动是什么？',
    options: ['堆沙祈福', '赛马', '摔跤', '射箭'],
    answer: 0,
    explanation: '桑刊节是布朗族的传统节日，主要活动是堆沙祈福，庆祝新年。'
  },
  {
    question: '撒拉族的"开斋节"与哪个宗教有关？',
    options: ['佛教', '基督教', '伊斯兰教', '道教'],
    answer: 2,
    explanation: '开斋节是撒拉族信仰伊斯兰教的重要节日，标志着斋月的结束。'
  },
  {
    question: '毛南族主要聚居在哪个地区？',
    options: ['广西', '云南', '贵州', '四川'],
    answer: 0,
    explanation: '毛南族主要聚居在广西壮族自治区，是中国人口较少的民族之一。'
  },
  {
    question: '仡佬族主要聚居在哪个地区？',
    options: ['贵州', '云南', '广西', '四川'],
    answer: 0,
    explanation: '仡佬族主要聚居在贵州省，是中国古老的民族之一。'
  },
  {
    question: '锡伯族主要聚居在哪个地区？',
    options: ['新疆', '辽宁', '吉林', '黑龙江'],
    answer: 0,
    explanation: '锡伯族主要聚居在新疆维吾尔自治区，是清朝时期从东北西迁而来。'
  },
  {
    question: '阿昌族的"阿昌刀"是什么？',
    options: ['一种乐器', '一种刀具', '一种舞蹈', '一种建筑'],
    answer: 1,
    explanation: '阿昌刀是阿昌族的传统手工艺品，工艺精湛，是阿昌族文化的象征。'
  },
  {
    question: '塔吉克族主要聚居在哪个地区？',
    options: ['新疆', '西藏', '青海', '甘肃'],
    answer: 0,
    explanation: '塔吉克族主要聚居在新疆维吾尔自治区，是中国唯一的白种人民族。'
  },
  {
    question: '怒族主要聚居在哪个地区？',
    options: ['云南', '贵州', '广西', '四川'],
    answer: 0,
    explanation: '怒族主要聚居在云南省，是中国人口较少的民族之一。'
  },
  {
    question: '乌孜别克族主要聚居在哪个地区？',
    options: ['新疆', '西藏', '青海', '甘肃'],
    answer: 0,
    explanation: '乌孜别克族主要聚居在新疆维吾尔自治区，是中国人口较少的民族之一。'
  },
  {
    question: '俄罗斯族主要聚居在哪个地区？',
    options: ['新疆、内蒙古、黑龙江', '西藏', '青海', '甘肃'],
    answer: 0,
    explanation: '俄罗斯族主要聚居在新疆、内蒙古、黑龙江等地，是中国人口较少的民族之一。'
  },
  {
    question: '鄂温克族主要聚居在哪个地区？',
    options: ['内蒙古', '黑龙江', '吉林', '辽宁'],
    answer: 0,
    explanation: '鄂温克族主要聚居在内蒙古自治区，是中国人口较少的民族之一。'
  },
  {
    question: '德昂族主要聚居在哪个地区？',
    options: ['云南', '贵州', '广西', '四川'],
    answer: 0,
    explanation: '德昂族主要聚居在云南省，是中国人口较少的民族之一。'
  },
  {
    question: '保安族主要聚居在哪个地区？',
    options: ['甘肃', '青海', '新疆', '宁夏'],
    answer: 0,
    explanation: '保安族主要聚居在甘肃省，是中国人口较少的民族之一。'
  },
  {
    question: '裕固族主要聚居在哪个地区？',
    options: ['甘肃', '青海', '新疆', '宁夏'],
    answer: 0,
    explanation: '裕固族主要聚居在甘肃省，是中国人口较少的民族之一。'
  },
  {
    question: '京族的传统渔业工具有什么特点？',
    options: ['现代化工具', '传统渔具，如渔网、渔船', '只用渔网', '只用渔船'],
    answer: 1,
    explanation: '京族是中国唯一的海洋民族，传统渔业工具包括渔网、渔船等。'
  },
  {
    question: '独龙族主要聚居在哪个地区？',
    options: ['云南', '贵州', '广西', '四川'],
    answer: 0,
    explanation: '独龙族主要聚居在云南省，是中国人口最少的民族之一。'
  },
  {
    question: '鄂伦春族的传统狩猎工具有什么特点？',
    options: ['现代化武器', '传统弓箭、猎枪', '只用弓箭', '只用猎枪'],
    answer: 1,
    explanation: '鄂伦春族是传统的狩猎民族，传统狩猎工具包括弓箭、猎枪等。'
  },
  {
    question: '赫哲族的传统渔业工具有什么特点？',
    options: ['现代化工具', '传统渔具，如渔网、渔船', '只用渔网', '只用渔船'],
    answer: 1,
    explanation: '赫哲族是中国北方唯一的渔猎民族，传统渔业工具包括渔网、渔船等。'
  },
  {
    question: '门巴族的传统服饰有什么特点？',
    options: ['与藏族相似', '与汉族相似', '与蒙古族相似', '与维吾尔族相似'],
    answer: 0,
    explanation: '门巴族与藏族文化有密切联系，传统服饰与藏族相似。'
  },
  {
    question: '珞巴族的传统服饰有什么特点？',
    options: ['与藏族相似', '与汉族相似', '与蒙古族相似', '与维吾尔族相似'],
    answer: 0,
    explanation: '珞巴族与藏族文化有密切联系，传统服饰与藏族相似。'
  },
  {
    question: '基诺族主要聚居在哪个地区？',
    options: ['云南', '贵州', '广西', '四川'],
    answer: 0,
    explanation: '基诺族主要聚居在云南省，是中国人口较少的民族之一。'
  },
  {
    question: '布朗族主要聚居在哪个地区？',
    options: ['云南', '贵州', '广西', '四川'],
    answer: 0,
    explanation: '布朗族主要聚居在云南省，是中国人口较少的民族之一。'
  }
];

// 困难难度题目库
const hardQuizData = [
  {
    question: '藏族的"格萨尔王传"是什么类型的文化遗产？',
    options: ['书面史诗', '口头传统史诗', '戏剧作品', '音乐作品'],
    answer: 1,
    explanation: '格萨尔王传是藏族民间口头传统史诗，是世界上最长的史诗之一，被列入联合国非物质文化遗产。'
  },
  {
    question: '蒙古族的"长调"民歌有什么独特之处？',
    options: ['节奏快速', '歌词简短', '旋律悠长，无歌词部分用"诺古拉"装饰', '只用乐器演奏'],
    answer: 2,
    explanation: '蒙古族长调旋律悠长，具有独特的"诺古拉"（颤音）唱法，是世界非物质文化遗产。'
  },
  {
    question: '维吾尔族"十二木卡姆"中的"木卡姆"一词源于哪个语言？',
    options: ['汉语', '阿拉伯语', '波斯语', '突厥语'],
    answer: 1,
    explanation: '"木卡姆"一词源于阿拉伯语，原意为"规范""聚会"，后演变为音乐套曲的专称。'
  },
  {
    question: '苗族的"银饰"工艺中，"錾刻"技术是指什么？',
    options: ['铸造', '在金属表面雕刻花纹', '焊接', '镀金'],
    answer: 1,
    explanation: '錾刻是苗族银饰制作的重要工艺，指用錾子在金属表面敲击出各种花纹图案。'
  },
  {
    question: '侗族大歌的"众低独高"是指什么？',
    options: ['大家一起唱低音，一个人唱高音', '大家一起唱高音，一个人唱低音', '男女声部分开唱', '轮唱形式'],
    answer: 0,
    explanation: '侗族大歌采用"众低独高"的演唱方式，即众人唱低音声部，一人唱高音领唱。'
  },
  {
    question: '土家族的"摆手舞"主要流传于哪个地区？',
    options: ['湖北', '湖南湘西', '重庆', '贵州'],
    answer: 1,
    explanation: '摆手舞是土家族的传统舞蹈，主要流传于湖南湘西土家族苗族自治州。'
  },
  {
    question: '彝族的"毕摩"在彝族社会中担任什么角色？',
    options: ['战士', '祭司和知识分子', '医生', '商人'],
    answer: 1,
    explanation: '毕摩是彝族的祭司，掌握彝族文字和传统文化，是彝族社会的知识分子和精神领袖。'
  },
  {
    question: '傣族的"贝叶经"是用什么材料制作的？',
    options: ['纸张', '贝多罗树叶', '丝绸', '竹简'],
    answer: 1,
    explanation: '贝叶经是傣族用贝多罗树叶刻写的佛教经典，具有极高的文化和历史价值。'
  },
  {
    question: '朝鲜族的"阿里郎"歌曲主要表达什么情感？',
    options: ['欢快喜庆', '离别和思念之情', '战争场面', '劳动场景'],
    answer: 1,
    explanation: '阿里郎是朝鲜族代表性民歌，主要表达离别和思念之情，被列入联合国非物质文化遗产。'
  },
  {
    question: '藏族的"磕长头"朝圣方式中，信徒们从哪里出发前往拉萨？',
    options: ['只从西藏各地', '从全国各地', '从青海、四川、云南、甘肃等藏区', '只从拉萨周边'],
    answer: 2,
    explanation: '磕长头的信徒主要从青海、四川、云南、甘肃等藏区出发，历经数月甚至数年前往拉萨朝圣。'
  },
  {
    question: '纳西族的"东巴文"属于什么类型的文字？',
    options: ['拼音文字', '象形文字', '楔形文字', '甲骨文'],
    answer: 1,
    explanation: '东巴文是纳西族使用的象形文字，是目前世界上唯一还在使用的象形文字系统。'
  },
  {
    question: '蒙古族的"呼麦"唱法有什么特点？',
    options: ['一个人同时唱出两个声部', '多人合唱', '只用假声', '只用真声'],
    answer: 0,
    explanation: '呼麦是蒙古族特有的唱法，一个人可以同时唱出两个声部（低音基音和高音泛音）。'
  },
  {
    question: '壮族的"铜鼓"在古代主要用途是什么？',
    options: ['乐器', '权力象征和祭祀用具', '货币', '农具'],
    answer: 1,
    explanation: '壮族铜鼓在古代是权力和财富的象征，主要用于祭祀、战争和集会等重要场合。'
  },
  {
    question: '赫哲族的"伊玛堪"是什么形式的艺术？',
    options: ['说唱文学', '舞蹈', '绘画', '建筑'],
    answer: 0,
    explanation: '伊玛堪是赫哲族特有的说唱文学形式，讲述英雄故事，被列入联合国非物质文化遗产。'
  },
  {
    question: '柯尔克孜族的"玛纳斯"与藏族的"格萨尔"、蒙古族的"江格尔"并称为什么？',
    options: ['中国三大史诗', '世界三大史诗', '亚洲三大史诗', '草原三大史诗'],
    answer: 0,
    explanation: '《玛纳斯》《格萨尔》《江格尔》并称为中国三大史诗，都是口头传统史诗的杰作。'
  },
  {
    question: '藏族的"藏戏"有什么独特的表演形式？',
    options: ['只有唱', '只有舞', '唱、舞、韵、白、表、技六种', '只有白'],
    answer: 2,
    explanation: '藏戏是藏族的传统戏剧，表演形式包括唱、舞、韵、白、表、技六种，是世界非物质文化遗产。'
  },
  {
    question: '蒙古族的"马头琴"制作工艺中，琴弦通常用什么材料？',
    options: ['钢丝', '尼龙', '马尾毛', '羊肠'],
    answer: 2,
    explanation: '马头琴的琴弦传统上用马尾毛制作，音色深沉悠扬，是蒙古族音乐的灵魂。'
  },
  {
    question: '维吾尔族的"麦西热甫"是什么？',
    options: ['一种舞蹈', '一种集歌舞、娱乐、说唱于一体的聚会', '一种乐器', '一种建筑'],
    answer: 1,
    explanation: '麦西热甫是维吾尔族集歌舞、娱乐、说唱于一体的传统聚会，是世界非物质文化遗产。'
  },
  {
    question: '苗族的"蜡染"工艺中，"蜡"主要来自什么？',
    options: ['蜂蜡', '石蜡', '植物蜡', '矿物蜡'],
    answer: 0,
    explanation: '苗族蜡染工艺中使用的蜡主要来自蜂蜡，是苗族传统印染工艺的重要材料。'
  },
  {
    question: '侗族的"大歌"有多少个声部？',
    options: ['2个', '3个', '4个', '5个以上'],
    answer: 2,
    explanation: '侗族大歌通常有4个声部，是多声部无伴奏合唱的杰作，是世界非物质文化遗产。'
  },
  {
    question: '彝族的"彝族年"是根据什么历法确定的？',
    options: ['公历', '农历', '彝族太阳历', '藏历'],
    answer: 2,
    explanation: '彝族年是根据彝族太阳历确定的，通常在彝族太阳历的十月底或十一月初。'
  },
  {
    question: '傣族的"傣历"一年有多少个月？',
    options: ['10个月', '12个月', '13个月', '15个月'],
    answer: 1,
    explanation: '傣历一年有12个月，单月30天，双月29天，是一种阴阳合历。'
  },
  {
    question: '朝鲜族的"农乐舞"有什么特点？',
    options: ['只有舞蹈', '只有音乐', '集舞蹈、音乐、杂技于一体', '只有歌唱'],
    answer: 2,
    explanation: '农乐舞是朝鲜族集舞蹈、音乐、杂技于一体的综合性表演艺术，是世界非物质文化遗产。'
  },
  {
    question: '藏族的"唐卡"绘画使用的颜料有什么特点？',
    options: ['化学颜料', '矿物颜料和植物颜料', '油画颜料', '水彩颜料'],
    answer: 1,
    explanation: '唐卡绘画使用矿物颜料和植物颜料，色彩鲜艳持久，可保存数百年不变色。'
  },
  {
    question: '蒙古族的"短调"民歌与"长调"有什么区别？',
    options: ['节奏更快，歌词更长', '节奏更快，歌词更短', '节奏更慢，歌词更长', '节奏更慢，歌词更短'],
    answer: 1,
    explanation: '蒙古族短调节奏更快，歌词更短，与长调形成鲜明对比，是蒙古族民歌的两大类型。'
  },
  {
    question: '维吾尔族的"纳兹库姆"舞蹈有什么特点？',
    options: ['只有舞蹈', '只有音乐', '舞蹈与音乐、幽默表演结合', '只有歌唱'],
    answer: 2,
    explanation: '纳兹库姆是维吾尔族舞蹈与音乐、幽默表演结合的传统艺术形式，极具观赏性。'
  },
  {
    question: '苗族的"芦笙舞"通常有多少人参加？',
    options: ['单人', '双人', '数十人至数百人', '只有男性'],
    answer: 2,
    explanation: '芦笙舞是苗族的集体舞蹈，通常有数十人至数百人参加，场面壮观。'
  },
  {
    question: '侗族的"鼓楼"建筑有什么独特的结构特点？',
    options: ['完全用钉子连接', '不用一钉一铆，全靠榫卯结构', '完全用胶水粘合', '完全用绳子捆绑'],
    answer: 1,
    explanation: '侗族鼓楼不用一钉一铆，全靠榫卯结构连接，体现了侗族人民高超的建筑技艺。'
  },
  {
    question: '彝族的"火把节"起源传说与什么有关？',
    options: ['驱赶害虫', '庆祝丰收', '纪念英雄', '祭祀祖先'],
    answer: 0,
    explanation: '彝族火把节起源传说与驱赶害虫有关，人们点燃火把驱赶害虫，保护庄稼。'
  },
  {
    question: '傣族的"泼水节"通常持续几天？',
    options: ['1天', '3天', '5天', '7天'],
    answer: 1,
    explanation: '傣族泼水节通常持续3天，第一天送旧，第二天泼水，第三天迎新。'
  },
  {
    question: '朝鲜族的"跳板"是什么？',
    options: ['一种乐器', '一种传统体育活动', '一种舞蹈', '一种建筑'],
    answer: 1,
    explanation: '跳板是朝鲜族的传统体育活动，两人站在木板两端，轮流跳跃，极具技巧性。'
  },
  {
    question: '藏族的"转山"朝圣活动与哪座山有关？',
    options: ['泰山', '冈仁波齐', '华山', '峨眉山'],
    answer: 1,
    explanation: '藏族的转山朝圣活动主要与冈仁波齐山有关，冈仁波齐是藏传佛教的神山。'
  },
  {
    question: '蒙古族的"敖包"有什么作用？',
    options: ['居住', '祭祀和导航', '储存粮食', '商业交易'],
    answer: 1,
    explanation: '敖包是蒙古族的祭祀场所和导航标志，在草原上具有重要的文化和实用价值。'
  },
  {
    question: '维吾尔族的"手鼓"在维吾尔语中叫什么？',
    options: ['达卜', '手鼓', '铃鼓', '腰鼓'],
    answer: 0,
    explanation: '维吾尔族的手鼓在维吾尔语中称为"达卜"，是维吾尔族音乐中不可缺少的打击乐器。'
  },
  {
    question: '苗族的"姊妹节"主要活动是什么？',
    options: ['赛马', '吃姊妹饭、对歌', '摔跤', '射箭'],
    answer: 1,
    explanation: '姊妹节是苗族的传统节日，主要活动是吃姊妹饭、对歌，是苗族青年男女社交的重要场合。'
  },
  {
    question: '侗族的"萨岁"是什么？',
    options: ['一种乐器', '侗族的女始祖神', '一种舞蹈', '一种建筑'],
    answer: 1,
    explanation: '萨岁是侗族的女始祖神，侗族人民每年都要祭祀萨岁，祈求平安幸福。'
  },
  {
    question: '彝族的"十月太阳历"一年有多少天？',
    options: ['360天', '365天', '370天', '375天'],
    answer: 0,
    explanation: '彝族的十月太阳历一年有360天，每月36天，是一种独特的历法系统。'
  },
  {
    question: '傣族的"象脚鼓"因什么而得名？',
    options: ['形状像象脚', '用象脚制作', '大象踩踏', '大象演奏'],
    answer: 0,
    explanation: '象脚鼓因形状像象脚而得名，是傣族重要的打击乐器，音色浑厚。'
  },
  {
    question: '朝鲜族的"秋千"是什么？',
    options: ['一种乐器', '一种传统体育活动', '一种舞蹈', '一种建筑'],
    answer: 1,
    explanation: '秋千是朝鲜族的传统体育活动，妇女们在秋千上荡来荡去，极具观赏性。'
  },
  {
    question: '藏族的"辩经"是什么？',
    options: ['一种舞蹈', '僧人之间的佛学辩论', '一种音乐', '一种建筑'],
    answer: 1,
    explanation: '辩经是藏传佛教僧人之间的佛学辩论，是藏传佛教独特的教学方式。'
  },
  {
    question: '蒙古族的"好来宝"是什么？',
    options: ['一种舞蹈', '一种即兴说唱艺术', '一种乐器', '一种建筑'],
    answer: 1,
    explanation: '好来宝是蒙古族的即兴说唱艺术，表演者即兴创作，幽默风趣。'
  },
  {
    question: '维吾尔族的"都塔尔"是什么？',
    options: ['一种舞蹈', '一种弹拨乐器', '一种建筑', '一种食物'],
    answer: 1,
    explanation: '都塔尔是维吾尔族的传统弹拨乐器，有两根弦，音色优美。'
  },
  {
    question: '苗族的"鼓藏节"多少年举行一次？',
    options: ['每年', '每3年', '每7年', '每13年'],
    answer: 3,
    explanation: '苗族的鼓藏节每13年举行一次，是苗族最隆重的祭祖大典。'
  },
  {
    question: '侗族的"款"是什么？',
    options: ['一种乐器', '侗族的传统社会组织形式', '一种舞蹈', '一种建筑'],
    answer: 1,
    explanation: '款是侗族的传统社会组织形式，是侗族社会自我管理的重要制度。'
  },
  {
    question: '彝族的"毕摩经"是用什么文字书写的？',
    options: ['汉字', '彝文', '藏文', '蒙古文'],
    answer: 1,
    explanation: '毕摩经是用彝文书写的，是彝族传统文化的重要载体。'
  },
  {
    question: '傣族的"赞哈"是什么？',
    options: ['一种舞蹈', '一种民间歌手', '一种乐器', '一种建筑'],
    answer: 1,
    explanation: '赞哈是傣族的民间歌手，擅长即兴演唱，是傣族文化的传承者。'
  },
  {
    question: '朝鲜族的"奚琴"是什么？',
    options: ['一种舞蹈', '一种拉弦乐器', '一种建筑', '一种食物'],
    answer: 1,
    explanation: '奚琴是朝鲜族的传统拉弦乐器，音色悠扬，是朝鲜族音乐的重要组成部分。'
  },
  {
    question: '藏族的"羌姆"是什么？',
    options: ['一种舞蹈', '藏传佛教的宗教舞蹈', '一种音乐', '一种建筑'],
    answer: 1,
    explanation: '羌姆是藏传佛教的宗教舞蹈，是僧人表演的仪式性舞蹈，具有深厚的宗教意义。'
  },
  {
    question: '蒙古族的"安代舞"起源于什么？',
    options: ['庆祝丰收', '治病驱邪', '祭祀祖先', '战争胜利'],
    answer: 1,
    explanation: '安代舞起源于蒙古族治病驱邪的仪式，后来演变为一种集体舞蹈。'
  },
  {
    question: '维吾尔族的"热瓦甫"是什么？',
    options: ['一种舞蹈', '一种弹拨乐器', '一种建筑', '一种食物'],
    answer: 1,
    explanation: '热瓦甫是维吾尔族的传统弹拨乐器，音色明亮，是维吾尔族音乐的重要组成部分。'
  },
  {
    question: '苗族的"龙舟节"主要活动是什么？',
    options: ['赛龙舟、踩鼓', '赛马', '摔跤', '射箭'],
    answer: 0,
    explanation: '龙舟节是苗族的传统节日，主要活动是赛龙舟、踩鼓，庆祝丰收。'
  },
  {
    question: '侗族的"多声部民歌"有什么特点？',
    options: ['单声部', '多声部无伴奏', '有伴奏', '只有男声'],
    answer: 1,
    explanation: '侗族多声部民歌是多声部无伴奏合唱，是侗族音乐的独特之处。'
  },
  {
    question: '彝族的"查姆"是什么？',
    options: ['一种舞蹈', '彝族的创世史诗', '一种乐器', '一种建筑'],
    answer: 1,
    explanation: '查姆是彝族的创世史诗，讲述了天地万物的起源，是彝族文化的重要组成部分。'
  },
  {
    question: '傣族的"孔雀舞"最初由谁表演？',
    options: ['男性', '女性', '儿童', '老人'],
    answer: 0,
    explanation: '傣族孔雀舞最初由男性表演，后来女性也开始表演，成为傣族最具代表性的舞蹈。'
  },
  {
    question: '朝鲜族的"牙拍舞"有什么特点？',
    options: ['用手拍打', '用牙拍打节拍', '用脚拍打', '用乐器伴奏'],
    answer: 1,
    explanation: '牙拍舞是朝鲜族的传统舞蹈，舞者用牙拍打节拍，极具技巧性。'
  },
  {
    question: '藏族的"囊玛"是什么？',
    options: ['一种舞蹈', '藏族的传统歌舞音乐', '一种乐器', '一种建筑'],
    answer: 1,
    explanation: '囊玛是藏族的传统歌舞音乐，起源于拉萨，是藏族音乐的重要形式。'
  },
  {
    question: '蒙古族的"乌力格尔"是什么？',
    options: ['一种舞蹈', '一种说书艺术', '一种乐器', '一种建筑'],
    answer: 1,
    explanation: '乌力格尔是蒙古族的说书艺术，表演者用蒙古语讲述故事，是蒙古族文化的重要组成部分。'
  },
  {
    question: '维吾尔族的"艾捷克"是什么？',
    options: ['一种舞蹈', '一种拉弦乐器', '一种建筑', '一种食物'],
    answer: 1,
    explanation: '艾捷克是维吾尔族的传统拉弦乐器，音色柔和，是维吾尔族音乐的重要组成部分。'
  },
  {
    question: '苗族的"吃鼓藏"是什么？',
    options: ['一种食物', '苗族的祭祖大典', '一种舞蹈', '一种建筑'],
    answer: 1,
    explanation: '吃鼓藏是苗族的祭祖大典，每13年举行一次，是苗族最隆重的宗教仪式。'
  },
  {
    question: '侗族的"侗戏"有什么特点？',
    options: ['只有唱', '只有舞', '唱、舞、白结合', '只有白'],
    answer: 2,
    explanation: '侗戏是侗族的传统戏剧，唱、舞、白结合，是侗族文化的重要组成部分。'
  },
  {
    question: '彝族的"梅葛"是什么？',
    options: ['一种舞蹈', '彝族的创世史诗', '一种乐器', '一种建筑'],
    answer: 1,
    explanation: '梅葛是彝族的创世史诗，讲述了天地万物的起源，是彝族文化的重要组成部分。'
  },
  {
    question: '傣族的"戛光"是什么？',
    options: ['一种舞蹈', '傣族的象脚鼓舞', '一种乐器', '一种建筑'],
    answer: 1,
    explanation: '戛光是傣族的象脚鼓舞，是傣族最具代表性的舞蹈之一。'
  }
];

// // 游戏状态
let currentQuestionIndex = 0;
let score = 0;
let selectedOption = null;
let correctCount = 0;
let wrongCount = 0;
let difficulty = 'easy';
let quizQuestions = [];
let answerHistory = []; // 保存答题历史

// DOM元素
const startPage = document.getElementById('startPage');
const quizPage = document.getElementById('quizPage');
const resultPage = document.getElementById('resultPage');

// DOM加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
  initDifficultySelector();
  initStartButton();
  initQuizButtons();
});

/**
 * 初始化难度选择器
 */
function initDifficultySelector() {
  const difficultyBtns = document.querySelectorAll('.difficulty-btn');
  
  difficultyBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      difficultyBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      difficulty = this.dataset.difficulty;
    });
  });
}

/**
 * 初始化开始按钮
 */
function initStartButton() {
  const startBtn = document.getElementById('startQuizBtn');
  if (!startBtn) return;

  startBtn.addEventListener('click', startQuiz);
}

/**
 * 初始化答题按钮
 */
function initQuizButtons() {
  const submitBtn = document.getElementById('submitBtn');
  const nextBtn = document.getElementById('nextBtn');
  const restartBtn = document.getElementById('restartBtn');
  const reviewBtn = document.getElementById('reviewBtn');

  if (submitBtn) {
    submitBtn.addEventListener('click', submitAnswer);
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', nextQuestion);
  }

  if (restartBtn) {
    restartBtn.addEventListener('click', restartQuiz);
  }

  if (reviewBtn) {
    reviewBtn.addEventListener('click', reviewAnswers);
  }
}

/**
 * 开始答题
 */
function startQuiz() {
  // 重置状态
  currentQuestionIndex = 0;
  score = 0;
  selectedOption = null;
  correctCount = 0;
  wrongCount = 0;
  answerHistory = []; // 清空答题历史

  // 根据难度选择题目
  quizQuestions = selectQuestionsByDifficulty(difficulty);

  // 更新UI
  updateProgress();
  showPage('quizPage');
  loadQuestion();
}

/**
 * 根据难度选择题目
 */
function selectQuestionsByDifficulty(diff) {
  const questionCount = 5; // 每次随机5道题目
  let questionData;
  
  // 根据难度选择对应的题目库
  switch(diff) {
    case 'easy':
      questionData = easyQuizData;
      break;
    case 'medium':
      questionData = mediumQuizData;
      break;
    case 'hard':
      questionData = hardQuizData;
      break;
    default:
      questionData = easyQuizData;
  }
  
  const shuffled = [...questionData].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, questionCount);
}

/**
 * 加载题目
 */
function loadQuestion() {
  if (currentQuestionIndex >= quizQuestions.length) {
    showResult();
    return;
  }

  const question = quizQuestions[currentQuestionIndex];
  
  // 更新题目内容
  document.getElementById('quizQuestion').textContent = question.question;
  
  // 生成选项
  const optionsContainer = document.getElementById('quizOptions');
  optionsContainer.innerHTML = question.options.map((option, index) => `
    <div class="quiz-option" data-index="${index}">
      <span class="option-letter">${String.fromCharCode(65 + index)}</span>
      <span>${option}</span>
    </div>
  `).join('');

  // 添加选项点击事件
  const options = optionsContainer.querySelectorAll('.quiz-option');
  options.forEach(option => {
    option.addEventListener('click', function() {
      selectOption(this);
    });
  });

  // 重置状态
  selectedOption = null;
  document.getElementById('submitBtn').disabled = true;
  updateProgress();
}

/**
 * 选择选项
 */
function selectOption(element) {
  const options = document.querySelectorAll('.quiz-option');
  options.forEach(opt => opt.classList.remove('selected'));
  
  element.classList.add('selected');
  selectedOption = parseInt(element.dataset.index);
  
  document.getElementById('submitBtn').disabled = false;
}

/**
 * 提交答案
 */
function submitAnswer() {
  if (selectedOption === null) return;

  const question = quizQuestions[currentQuestionIndex];
  const options = document.querySelectorAll('.quiz-option');
  
  // 显示正确答案
  options.forEach((opt, index) => {
    if (index === question.answer) {
      opt.classList.add('correct');
    } else if (index === selectedOption && index !== question.answer) {
      opt.classList.add('wrong');
    }
  });

  // 计分
  const isCorrect = selectedOption === question.answer;
  if (isCorrect) {
    score += 20; // 每题20分，5题共100分
    correctCount++;
  } else {
    wrongCount++;
  }
  
  // 记录答题历史
  answerHistory.push({
    question: question.question,
    options: question.options,
    correctAnswer: question.answer,
    userAnswer: selectedOption,
    isCorrect: isCorrect,
    explanation: question.explanation
  });

  // 更新分数
  document.getElementById('currentScore').textContent = score;

  // 禁用选项
  options.forEach(opt => opt.style.pointerEvents = 'none');
  
  // 显示答案解析
  showExplanation(question);
  
  // 切换按钮：隐藏提交按钮，显示下一题按钮
  document.getElementById('submitBtn').classList.add('hidden');
  const nextBtn = document.getElementById('nextBtn');
  if (nextBtn) {
    nextBtn.classList.remove('hidden');
    // 如果是最后一题，按钮文字改为"查看结果"
    if (currentQuestionIndex === quizQuestions.length - 1) {
      nextBtn.textContent = '查看结果';
    } else {
      nextBtn.textContent = '下一题';
    }
  }
}

/**
 * 显示答案解析
 */
function showExplanation(question) {
  const quizCard = document.querySelector('.quiz-card');
  
  // 移除已有的解析
  const existingExplanation = quizCard.querySelector('.explanation');
  if (existingExplanation) {
    existingExplanation.remove();
  }
  
  // 创建解析元素
  const explanationDiv = document.createElement('div');
  explanationDiv.className = 'explanation';
  explanationDiv.style.cssText = `
    margin-top: var(--spacing-lg);
    padding: var(--spacing-md);
    background: #f5f5f5;
    border-radius: var(--radius-md);
    border-left: 4px solid var(--color-zhu-red);
  `;
  
  const isCorrect = selectedOption === question.answer;
  explanationDiv.innerHTML = `
    <div style="font-weight: 600; margin-bottom: var(--spacing-sm); color: ${isCorrect ? '#4CAF50' : '#f44336'};">
      ${isCorrect ? '✓ 回答正确！' : '✗ 回答错误'}
    </div>
    <div style="color: var(--text-secondary); line-height: 1.6;">
      <strong>答案解析：</strong>${question.explanation}
    </div>
  `;
  
  quizCard.appendChild(explanationDiv);
}

/**
 * 下一题
 */
function nextQuestion() {
  // 移除解析
  const quizCard = document.querySelector('.quiz-card');
  const explanation = quizCard.querySelector('.explanation');
  if (explanation) {
    explanation.remove();
  }
  
  // 切换按钮：显示提交按钮，隐藏下一题按钮
  document.getElementById('submitBtn').classList.remove('hidden');
  const nextBtn = document.getElementById('nextBtn');
  if (nextBtn) {
    nextBtn.classList.add('hidden');
  }
  
  currentQuestionIndex++;
  loadQuestion();
}

/**
 * 显示结果
 */
function showResult() {
  showPage('resultPage');
  
  // 计算正确率
  const totalQuestions = quizQuestions.length;
  const accuracy = Math.round((correctCount / totalQuestions) * 100);
  
  // 更新结果数据
  document.getElementById('finalScore').textContent = score;
  document.getElementById('correctCount').textContent = correctCount;
  document.getElementById('wrongCount').textContent = wrongCount;
  document.getElementById('accuracyRate').textContent = accuracy + '%';

  // 生成评语
  const message = getResultMessage(score);
  document.getElementById('resultMessage').textContent = message;
}

/**
 * 获取结果评语
 */
function getResultMessage(score) {
  if (score >= 100) {
    return '太棒了！满分！你是真正的民族文化专家！';
  } else if (score >= 80) {
    return '非常好！你对民族文化有深入了解。';
  } else if (score >= 60) {
    return '不错！继续学习，你会更了解民族文化。';
  } else if (score >= 40) {
    return '还可以！多了解民族文化，下次会更好！';
  } else {
    return '加油！学习民族文化是一件有趣的事情！';
  }
}

/**
 * 重新开始
 */
function restartQuiz() {
  showPage('startPage');
}

/**
 * 查看答案
 */
function reviewAnswers() {
  const modal = document.getElementById('answerModal');
  const content = document.getElementById('answerHistoryContent');
  const closeBtn = document.getElementById('closeModal');
  
  if (!modal || !content || !closeBtn) return;
  
  // 生成答题历史内容
  let html = '';
  
  answerHistory.forEach((item, index) => {
    const questionNumber = index + 1;
    const isCorrect = item.isCorrect;
    const correctAnswer = item.options[item.correctAnswer];
    const userAnswer = item.options[item.userAnswer];
    
    html += `
      <div style="
        border: 2px solid ${isCorrect ? '#4CAF50' : '#f44336'};
        border-radius: var(--radius-md);
        padding: var(--spacing-lg);
        margin-bottom: var(--spacing-lg);
        background: ${isCorrect ? 'rgba(76, 175, 80, 0.05)' : 'rgba(244, 67, 54, 0.05)'};
      ">
        <div style="
          display: flex;
          align-items: center;
          margin-bottom: var(--spacing-md);
        ">
          <span style="
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background: ${isCorrect ? '#4CAF50' : '#f44336'};
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 600;
            margin-right: var(--spacing-md);
          ">${questionNumber}</span>
          <h4 style="
            font-size: 1.1rem;
            font-weight: 600;
            margin: 0;
            flex: 1;
          ">${item.question}</h4>
          <span style="
            padding: 4px 12px;
            border-radius: var(--radius-full);
            font-size: 0.85rem;
            font-weight: 600;
            background: ${isCorrect ? '#4CAF50' : '#f44336'};
            color: white;
          ">${isCorrect ? '正确' : '错误'}</span>
        </div>
        
        <div style="margin-bottom: var(--spacing-md);">
          <strong>选项：</strong>
          <ul style="list-style: none; padding: 0; margin: var(--spacing-sm) 0 0 0;">
            ${item.options.map((option, i) => `
              <li style="
                padding: 6px 12px;
                margin-bottom: 4px;
                border-radius: var(--radius-sm);
                ${i === item.correctAnswer ? 'background: rgba(76, 175, 80, 0.1); border-left: 4px solid #4CAF50;' : ''}
                ${i === item.userAnswer && i !== item.correctAnswer ? 'background: rgba(244, 67, 54, 0.1); border-left: 4px solid #f44336;' : ''}
              ">
                <span style="font-weight: 600; margin-right: 8px;">${String.fromCharCode(65 + i)}.</span>
                ${option}
                ${i === item.correctAnswer ? ' <span style="color: #4CAF50; font-size: 0.85rem;">(正确答案)</span>' : ''}
                ${i === item.userAnswer ? ' <span style="color: #f44336; font-size: 0.85rem;">(你的答案)</span>' : ''}
              </li>
            `).join('')}
          </ul>
        </div>
        
        <div style="
          padding: var(--spacing-md);
          background: #f5f5f5;
          border-radius: var(--radius-md);
          border-left: 4px solid var(--color-zhu-red);
        ">
          <strong>答案解析：</strong>
          <p style="margin: var(--spacing-sm) 0 0 0; line-height: 1.6;">
            ${item.explanation}
          </p>
        </div>
      </div>
    `;
  });
  
  content.innerHTML = html;
  
  // 显示模态框
  modal.style.display = 'flex';
  
  // 关闭按钮事件
  closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
  });
  
  // 点击模态框外部关闭
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
}

/**
 * 更新进度
 */
function updateProgress() {
  const current = currentQuestionIndex + 1;
  const total = quizQuestions.length;
  const percentage = (current / total) * 100;

  document.getElementById('currentQuestion').textContent = current;
  document.getElementById('totalQuestions').textContent = total;
  document.getElementById('progressFill').style.width = percentage + '%';
}

/**
 * 显示指定页面
 */
function showPage(pageId) {
  startPage.classList.add('hidden');
  quizPage.classList.add('hidden');
  resultPage.classList.add('hidden');
  
  document.getElementById(pageId).classList.remove('hidden');
}

/**
 * 显示提示消息
 */
function showToast(message, duration = 2000) {
  // 移除已有的toast
  const existingToast = document.querySelector('.toast-message');
  if (existingToast) {
    existingToast.remove();
  }
  
  // 创建新的toast
  const toast = document.createElement('div');
  toast.className = 'toast-message';
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    top: 80px;
    left: 50%;
    transform: translateX(-50%);
    background: #333;
    color: white;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 14px;
    z-index: 10000;
    animation: fadeIn 0.3s ease;
  `;
  
  document.body.appendChild(toast);
  
  // 自动移除
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}
