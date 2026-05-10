// 中国各民族文化历史网站 - 民族数据

export interface Nation {
  id: string
  name: string
  pinyin: string
  nativeName?: string
  region: string[]
  language: string
  population: string
  description: string
  tags: string[]
  color: {
    primary: string
    secondary: string
  }
  image: string
}

export const nations: Nation[] = [
  {
    id: 'han',
    name: '汉族',
    pinyin: 'Hanzu',
    region: ['全国各地'],
    language: '汉语（汉藏语系）',
    population: '约12.8亿',
    description: '汉族是中国的主体民族，拥有悠久的历史和灿烂的文化。汉族文化是中华文化的主体，对世界文明发展做出了重要贡献。',
    tags: ['春节', '汉服', '京剧', '书法'],
    color: { primary: '#D32F2F', secondary: '#FFD54F' },
    image: '/images/nations/han.jpg'
  },
  {
    id: 'mongolian',
    name: '蒙古族',
    pinyin: 'Mengguzu',
    nativeName: 'Mongol',
    region: ['内蒙古', '新疆', '青海', '甘肃'],
    language: '蒙古语（阿尔泰语系）',
    population: '约600万',
    description: '蒙古族是游牧民族的代表，拥有悠久的草原文化。那达慕大会、马头琴、蒙古包是蒙古族文化的象征。',
    tags: ['那达慕', '马头琴', '蒙古包', '长调'],
    color: { primary: '#1976D2', secondary: '#4CAF50' },
    image: '/images/nations/mongolian.jpg'
  },
  {
    id: 'tibetan',
    name: '藏族',
    pinyin: 'Zangzu',
    nativeName: 'Bodpa',
    region: ['西藏', '青海', '四川', '云南', '甘肃'],
    language: '藏语（汉藏语系）',
    population: '约700万',
    description: '藏族主要聚居在青藏高原，拥有独特的藏传佛教文化。唐卡、藏戏、酥油茶是藏族文化的代表。',
    tags: ['藏历新年', '唐卡', '酥油茶', '藏戏'],
    color: { primary: '#C62828', secondary: '#F5F5F5' },
    image: '/images/nations/tibetan.jpg'
  },
  {
    id: 'uyghur',
    name: '维吾尔族',
    pinyin: 'Weiwuerzu',
    nativeName: 'Uyghur',
    region: ['新疆'],
    language: '维吾尔语（阿尔泰语系）',
    population: '约1000万',
    description: '维吾尔族是新疆的主体民族，拥有丰富的歌舞艺术传统。十二木卡姆是世界非物质文化遗产。',
    tags: ['十二木卡姆', '手抓饭', '馕', '麦西热甫'],
    color: { primary: '#1565C0', secondary: '#FFB300' },
    image: '/images/nations/uyghur.jpg'
  },
  {
    id: 'hui',
    name: '回族',
    pinyin: 'Huizu',
    region: ['宁夏', '甘肃', '青海', '新疆', '河南', '河北', '云南', '山东'],
    language: '汉语（通用）',
    population: '约1100万',
    description: '回族是中国分布最广的少数民族，以伊斯兰教信仰为纽带，形成了独特的民族文化。',
    tags: ['开斋节', '清真食品', '花儿', '清真寺'],
    color: { primary: '#2E7D32', secondary: '#FFFFFF' },
    image: '/images/nations/hui.jpg'
  },
  {
    id: 'zhuang',
    name: '壮族',
    pinyin: 'Zhuangzu',
    nativeName: 'Bouxcuengh',
    region: ['广西', '云南', '广东', '贵州'],
    language: '壮语（汉藏语系）',
    population: '约1900万',
    description: '壮族是中国人口最多的少数民族，以壮锦、铜鼓、山歌闻名。三月三是壮族的重要节日。',
    tags: ['三月三', '壮锦', '铜鼓', '山歌'],
    color: { primary: '#0288D1', secondary: '#FDD835' },
    image: '/images/nations/zhuang.jpg'
  },
  {
    id: 'miao',
    name: '苗族',
    pinyin: 'Miaozu',
    nativeName: 'Hmong',
    region: ['贵州', '湖南', '云南', '广西', '四川', '海南'],
    language: '苗语（汉藏语系）',
    population: '约1100万',
    description: '苗族以精美的银饰、刺绣和蜡染闻名。苗年、姊妹节是苗族的重要传统节日。',
    tags: ['苗年', '银饰', '蜡染', '芦笙'],
    color: { primary: '#C62828', secondary: '#ECEFF1' },
    image: '/images/nations/miao.jpg'
  },
  {
    id: 'yi',
    name: '彝族',
    pinyin: 'Yizu',
    nativeName: 'Nuosu',
    region: ['四川', '云南', '贵州', '广西'],
    language: '彝语（汉藏语系）',
    population: '约980万',
    description: '彝族拥有独特的十月太阳历和火把节。彝族服饰色彩艳丽，歌舞热情奔放。',
    tags: ['火把节', '十月太阳历', '彝族服饰', '达体舞'],
    color: { primary: '#D32F2F', secondary: '#263238' },
    image: '/images/nations/yi.jpg'
  },
  {
    id: 'buyei',
    name: '布依族',
    pinyin: 'Buyeizu',
    region: ['贵州', '云南', '四川'],
    language: '布依语（汉藏语系）',
    population: '约350万',
    description: '布依族主要聚居在贵州，以蜡染、刺绣闻名。布依族擅长水稻种植，有"水稻民族"之称。',
    tags: ['蜡染', '六月六', '布依戏', '八音坐唱'],
    color: { primary: '#00796B', secondary: '#FF8A65' },
    image: '/images/nations/buyei.jpg'
  },
  {
    id: 'korean',
    name: '朝鲜族',
    pinyin: 'Chaoxianzu',
    nativeName: 'Joseon',
    region: ['吉林', '黑龙江', '辽宁'],
    language: '朝鲜语（阿尔泰语系）',
    population: '约180万',
    description: '朝鲜族主要聚居在东北地区，以歌舞、体育、美食闻名。长鼓舞、伽倻琴是朝鲜族艺术的代表。',
    tags: ['长鼓舞', '伽倻琴', '泡菜', '冷面'],
    color: { primary: '#1565C0', secondary: '#E53935' },
    image: '/images/nations/korean.jpg'
  },
  {
    id: 'manchu',
    name: '满族',
    pinyin: 'Manzu',
    nativeName: 'Manchu',
    region: ['辽宁', '吉林', '黑龙江', '河北', '北京', '内蒙古'],
    language: '满语（阿尔泰语系）',
    population: '约1000万',
    description: '满族曾建立清朝，对中国历史产生深远影响。旗袍、萨其马、酸汤子是满族文化的代表。',
    tags: ['旗袍', '萨其马', '满族说部', '珍珠球'],
    color: { primary: '#5E35B1', secondary: '#FFD54F' },
    image: '/images/nations/manchu.jpg'
  },
  {
    id: 'dong',
    name: '侗族',
    pinyin: 'Dongzu',
    nativeName: 'Gaeml',
    region: ['贵州', '湖南', '广西', '湖北'],
    language: '侗语（汉藏语系）',
    population: '约350万',
    description: '侗族以鼓楼、风雨桥、大歌闻名。侗族大歌是世界非物质文化遗产。',
    tags: ['侗族大歌', '鼓楼', '风雨桥', '侗锦'],
    color: { primary: '#2E7D32', secondary: '#8D6E63' },
    image: '/images/nations/dong.jpg'
  }
]

// 获取民族总数
export const getTotalNations = () => nations.length

// 根据ID获取民族
export const getNationById = (id: string) => {
  return nations.find(nation => nation.id === id)
}

// 根据地区筛选民族
export const getNationsByRegion = (region: string) => {
  return nations.filter(nation => nation.region.includes(region))
}

// 搜索民族
export const searchNations = (keyword: string) => {
  const lowerKeyword = keyword.toLowerCase()
  return nations.filter(nation => 
    nation.name.toLowerCase().includes(lowerKeyword) ||
    nation.pinyin.toLowerCase().includes(lowerKeyword) ||
    nation.tags.some(tag => tag.toLowerCase().includes(lowerKeyword))
  )
}
