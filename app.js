const modes = {
  flight: { label: "飞机", color: "#2d6cdf", mapsMode: "transit" },
  train: { label: "高铁/火车", color: "#0e7c7b", mapsMode: "transit" },
  metro: { label: "地铁/电车", color: "#7d4bc6", mapsMode: "transit" },
  walk: { label: "步行", color: "#d95d39", mapsMode: "walking" },
  taxi: { label: "打车/接驳", color: "#c6972f", mapsMode: "driving" },
  boat: { label: "游船/渡轮", color: "#209fb5", mapsMode: "transit" }
};

const places = {
  xianAirport: { name: "西安咸阳国际机场 T5", lat: 34.4471, lng: 108.7516, type: "airport", query: "Xi'an Xianyang International Airport Terminal 5" },

  fco: { name: "Rome Fiumicino Airport (FCO)", lat: 41.8003, lng: 12.2389, type: "airport", query: "Rome Fiumicino Airport FCO" },
  termini: { name: "Roma Termini", lat: 41.9010, lng: 12.5010, type: "station", query: "Roma Termini" },
  romeHotel: { name: "Monti / Colosseo 酒店区", lat: 41.8953, lng: 12.4924, type: "hotel", query: "Monti Rome hotels" },
  pantheon: { name: "万神殿", lat: 41.8986, lng: 12.4769, type: "sight", query: "Pantheon Rome" },
  navona: { name: "纳沃纳广场", lat: 41.8992, lng: 12.4731, type: "sight", query: "Piazza Navona Rome" },
  trevi: { name: "特莱维喷泉", lat: 41.9009, lng: 12.4833, type: "sight", query: "Trevi Fountain Rome" },
  colosseum: { name: "斗兽场", lat: 41.8902, lng: 12.4922, type: "sight", query: "Colosseum Rome" },
  forum: { name: "古罗马广场", lat: 41.8925, lng: 12.4853, type: "sight", query: "Roman Forum Rome" },
  vaticanMuseums: { name: "梵蒂冈博物馆", lat: 41.9065, lng: 12.4536, type: "sight", query: "Vatican Museums" },
  stPeters: { name: "圣彼得大教堂", lat: 41.9022, lng: 12.4539, type: "sight", query: "St Peter's Basilica Vatican" },
  trastevere: { name: "Trastevere 晚餐区", lat: 41.8896, lng: 12.4700, type: "food", query: "restaurants Trastevere Rome" },
  pantheonLunch: { name: "万神殿周边午餐区", lat: 41.8990, lng: 12.4760, type: "food", query: "restaurants near Pantheon Rome" },
  montiDinner: { name: "Monti 晚餐区", lat: 41.8957, lng: 12.4935, type: "food", query: "restaurants Monti Rome" },

  firenzeSMN: { name: "Firenze Santa Maria Novella", lat: 43.7767, lng: 11.2480, type: "station", query: "Firenze Santa Maria Novella Station" },
  florenceHotel: { name: "佛罗伦萨 Duomo / Santa Maria Novella 酒店区", lat: 43.7749, lng: 11.2533, type: "hotel", query: "Florence Duomo Santa Maria Novella hotels" },
  duomoFlorence: { name: "圣母百花大教堂", lat: 43.7731, lng: 11.2560, type: "sight", query: "Cathedral of Santa Maria del Fiore Florence" },
  signoria: { name: "领主广场", lat: 43.7696, lng: 11.2558, type: "sight", query: "Piazza della Signoria Florence" },
  uffizi: { name: "乌菲兹美术馆", lat: 43.7687, lng: 11.2550, type: "sight", query: "Uffizi Gallery Florence" },
  ponteVecchio: { name: "老桥", lat: 43.7679, lng: 11.2531, type: "sight", query: "Ponte Vecchio Florence" },
  santaCroce: { name: "圣十字圣殿", lat: 43.7687, lng: 11.2622, type: "sight", query: "Basilica of Santa Croce Florence" },
  piazzaleMichelangelo: { name: "米开朗琪罗广场", lat: 43.7629, lng: 11.2650, type: "sight", query: "Piazzale Michelangelo Florence" },
  mercatoCentrale: { name: "中央市场午餐区", lat: 43.7764, lng: 11.2531, type: "food", query: "Mercato Centrale Florence food" },
  oltrarnoDinner: { name: "Oltrarno 晚餐区", lat: 43.7660, lng: 11.2483, type: "food", query: "restaurants Oltrarno Florence" },
  pisaCentrale: { name: "Pisa Centrale", lat: 43.7080, lng: 10.3986, type: "station", query: "Pisa Centrale Station" },
  leaningTower: { name: "比萨斜塔", lat: 43.7230, lng: 10.3966, type: "sight", query: "Leaning Tower of Pisa" },
  luccaStation: { name: "Lucca Station", lat: 43.8376, lng: 10.5059, type: "station", query: "Lucca Station Italy" },
  luccaWalls: { name: "卢卡城墙", lat: 43.8420, lng: 10.5050, type: "sight", query: "Lucca city walls" },
  pisaLunch: { name: "奇迹广场午餐区", lat: 43.7228, lng: 10.3958, type: "food", query: "restaurants near Leaning Tower of Pisa" },

  nce: { name: "Nice Cote d'Azur Airport", lat: 43.6653, lng: 7.2150, type: "airport", query: "Nice Cote d'Azur Airport" },
  niceVille: { name: "Nice-Ville Station", lat: 43.7046, lng: 7.2619, type: "station", query: "Nice Ville Station" },
  niceHotel: { name: "尼斯老城 / Promenade 酒店区", lat: 43.6964, lng: 7.2765, type: "hotel", query: "Vieux Nice Promenade des Anglais hotels" },
  promenade: { name: "英国人散步大道", lat: 43.6951, lng: 7.2651, type: "sight", query: "Promenade des Anglais Nice" },
  castleHill: { name: "尼斯城堡山", lat: 43.6958, lng: 7.2808, type: "sight", query: "Castle Hill Nice" },
  eze: { name: "埃兹山顶小镇", lat: 43.7278, lng: 7.3618, type: "sight", query: "Eze France" },
  coursSaleya: { name: "Cours Saleya 餐饮/市集区", lat: 43.6953, lng: 7.2762, type: "food", query: "Cours Saleya restaurants Nice" },
  niceDinner: { name: "尼斯老城晚餐区", lat: 43.6972, lng: 7.2774, type: "food", query: "restaurants Vieux Nice" },

  bcn: { name: "Barcelona El Prat Airport", lat: 41.2974, lng: 2.0833, type: "airport", query: "Barcelona El Prat Airport BCN" },
  sants: { name: "Barcelona Sants", lat: 41.3791, lng: 2.1401, type: "station", query: "Barcelona Sants Station" },
  bcnHotel: { name: "Eixample 酒店区", lat: 41.3910, lng: 2.1650, type: "hotel", query: "Eixample Barcelona hotels" },
  gothic: { name: "哥特区", lat: 41.3839, lng: 2.1763, type: "sight", query: "Gothic Quarter Barcelona" },
  sagrada: { name: "圣家堂", lat: 41.4036, lng: 2.1744, type: "sight", query: "Sagrada Familia Barcelona" },
  casaBatllo: { name: "巴特罗之家", lat: 41.3917, lng: 2.1649, type: "sight", query: "Casa Batllo Barcelona" },
  pedrera: { name: "米拉之家", lat: 41.3954, lng: 2.1619, type: "sight", query: "Casa Mila Barcelona" },
  parkGuell: { name: "古埃尔公园", lat: 41.4145, lng: 2.1527, type: "sight", query: "Park Guell Barcelona" },
  boqueria: { name: "博盖利亚市场", lat: 41.3818, lng: 2.1715, type: "food", query: "La Boqueria Barcelona" },
  barceloneta: { name: "巴塞罗内塔海滩", lat: 41.3784, lng: 2.1925, type: "sight", query: "Barceloneta Beach" },
  eixampleDinner: { name: "Eixample 晚餐区", lat: 41.3921, lng: 2.1635, type: "food", query: "restaurants Eixample Barcelona" },

  gareLyon: { name: "Paris Gare de Lyon", lat: 48.8443, lng: 2.3730, type: "station", query: "Paris Gare de Lyon" },
  cdg: { name: "Paris Charles de Gaulle Airport", lat: 49.0097, lng: 2.5479, type: "airport", query: "Paris Charles de Gaulle Airport" },
  parisHotel: { name: "Saint-Germain / Latin Quarter 酒店区", lat: 48.8500, lng: 2.3420, type: "hotel", query: "Saint Germain Latin Quarter Paris hotels" },
  seine: { name: "塞纳河游船码头", lat: 48.8584, lng: 2.2945, type: "sight", query: "Seine River cruise Paris" },
  louvre: { name: "卢浮宫", lat: 48.8606, lng: 2.3376, type: "sight", query: "Louvre Museum Paris" },
  tuileries: { name: "杜乐丽花园", lat: 48.8635, lng: 2.3270, type: "sight", query: "Tuileries Garden Paris" },
  eiffel: { name: "埃菲尔铁塔", lat: 48.8584, lng: 2.2945, type: "sight", query: "Eiffel Tower Paris" },
  orsay: { name: "奥赛博物馆", lat: 48.8600, lng: 2.3266, type: "sight", query: "Musee d'Orsay Paris" },
  marais: { name: "玛黑区", lat: 48.8586, lng: 2.3624, type: "sight", query: "Le Marais Paris" },
  parisLunch: { name: "卢浮宫 / Palais Royal 午餐区", lat: 48.8641, lng: 2.3376, type: "food", query: "restaurants near Palais Royal Paris" },
  saintGermainDinner: { name: "Saint-Germain 晚餐区", lat: 48.8532, lng: 2.3335, type: "food", query: "restaurants Saint Germain Paris" }
};

const placeRatings = {
  pantheon: 5,
  navona: 4,
  trevi: 4,
  colosseum: 5,
  forum: 5,
  vaticanMuseums: 5,
  stPeters: 5,
  duomoFlorence: 5,
  signoria: 4,
  uffizi: 5,
  ponteVecchio: 4,
  santaCroce: 4,
  piazzaleMichelangelo: 4,
  leaningTower: 4,
  luccaWalls: 3,
  promenade: 4,
  castleHill: 4,
  eze: 4,
  gothic: 4,
  sagrada: 5,
  casaBatllo: 5,
  pedrera: 4,
  parkGuell: 4,
  barceloneta: 3,
  louvre: 5,
  tuileries: 3,
  eiffel: 5,
  orsay: 5,
  seine: 4,
  marais: 4
};

const days = [
  { id: "all", label: "全部路线", title: "全程总览", date: "15天" },
  { id: "D1", label: "D1 抵达罗马", title: "西安 → 罗马", date: "D1", summary: "国际航班抵达，打车/机场快线进城，晚上不排景点。" },
  { id: "D2", label: "D2 罗马轻松线", title: "万神殿 · 纳沃纳 · 特莱维", date: "D2", summary: "倒时差日，集中在罗马老城，少走回头路。" },
  { id: "D3", label: "D3 古罗马线", title: "斗兽场 · 古罗马广场", date: "D3", summary: "只安排一个重预约，下午回酒店休息。" },
  { id: "D4", label: "D4 梵蒂冈线", title: "梵蒂冈 · 圣彼得 · Trastevere", date: "D4", summary: "早场梵蒂冈，晚上用出租衔接晚餐区。" },
  { id: "D5", label: "D5 到佛罗伦萨", title: "罗马 → 佛罗伦萨", date: "D5", summary: "高铁短移动，下午步行看 Duomo、领主广场和老桥。" },
  { id: "D6", label: "D6 佛罗伦萨完整日", title: "乌菲兹 · 圣十字 · 米开朗琪罗广场", date: "D6", summary: "文艺复兴核心日，中午安排中央市场休息。" },
  { id: "D7", label: "D7 托斯卡纳轻日游", title: "比萨 · 卢卡可选", date: "D7", summary: "全程火车/出租，卢卡为可取消项。" },
  { id: "D8", label: "D8 到尼斯", title: "佛罗伦萨 → 尼斯", date: "D8", summary: "长移动日，只保留海边晚餐。" },
  { id: "D9", label: "D9 尼斯精选", title: "尼斯 · 埃兹半日可选", date: "D9", summary: "南法保留尼斯，不加普罗旺斯，不自驾。" },
  { id: "D10", label: "D10 到巴塞罗那", title: "尼斯 → 巴塞罗那", date: "D10", summary: "建议短飞，抵达后只走哥特区和顺路晚餐。" },
  { id: "D11", label: "D11 高迪建筑", title: "圣家堂 · 巴特罗之家 · 米拉之家", date: "D11", summary: "巴塞罗那最重要的一天，全部预约时段。" },
  { id: "D12", label: "D12 巴塞罗那城市线", title: "古埃尔公园 · 市场 · 海边", date: "D12", summary: "上午公园，下午市场和海边，节奏更松。" },
  { id: "D13", label: "D13 到巴黎", title: "巴塞罗那 → 巴黎", date: "D13", summary: "高铁进巴黎，抵达日不排重景点，保证次日完整巴黎。" },
  { id: "D14", label: "D14 巴黎完整日", title: "卢浮宫 · 奥赛 · 埃菲尔", date: "D14", summary: "巴黎完整一天，博物馆和铁塔三选二执行。" },
  { id: "D15", label: "D15 巴黎返程", title: "玛黑区 · CDG 返程", date: "D15", summary: "按航班轻购物、退税、去机场。" }
];

const segments = [
  seg("D1", "flight", "西安 → 罗马 FCO", "xianAirport", "fco", "长途国际航班，尽量买联程；落地后不安排正式景点。", "12-18h"),
  seg("D1", "train", "FCO → Roma Termini", "fco", "termini", "Leonardo Express 或同类机场快线；若同行状态疲惫可直接打车到酒店。", "32m"),
  seg("D1", "taxi", "Termini → Monti 酒店区", "termini", "romeHotel", "抵达日避免拖箱走石板路，优先打车。", "10-20m"),
  seg("D1", "walk", "酒店区 → Monti 晚餐区", "romeHotel", "montiDinner", "只安排酒店附近晚餐，吃完直接回酒店。", "5-12m"),

  seg("D2", "taxi", "酒店区 → 万神殿", "romeHotel", "pantheon", "倒时差日少走路，第一段可打车。", "12-20m"),
  seg("D2", "walk", "万神殿 → 万神殿周边午餐区", "pantheon", "pantheonLunch", "午餐就在景点旁，不绕路。", "3-6m"),
  seg("D2", "walk", "午餐区 → 纳沃纳广场", "pantheonLunch", "navona", "平路慢走，方便随时停。", "6m"),
  seg("D2", "walk", "纳沃纳 → 特莱维喷泉", "navona", "trevi", "黄昏或晚上更适合拍照。", "15-20m"),
  seg("D2", "taxi", "特莱维喷泉 → 酒店区", "trevi", "romeHotel", "晚间不硬走回酒店。", "10-20m"),

  seg("D3", "walk", "酒店区 → 斗兽场", "romeHotel", "colosseum", "预约上午入场，避开午后热和人流。", "10m"),
  seg("D3", "walk", "斗兽场 → 古罗马广场", "colosseum", "forum", "同一区域串联，注意台阶和暴晒。", "5m"),
  seg("D3", "taxi", "古罗马广场 → Monti 午餐/酒店", "forum", "montiDinner", "午餐后回酒店休息，不再塞远景点。", "8-15m"),

  seg("D4", "taxi", "酒店区 → 梵蒂冈博物馆", "romeHotel", "vaticanMuseums", "早场预约，三人同行建议打车减少换乘。", "25-35m"),
  seg("D4", "walk", "梵蒂冈博物馆 → 圣彼得大教堂", "vaticanMuseums", "stPeters", "按当天安检队伍调整，累了就取消教堂内部。", "15-25m"),
  seg("D4", "taxi", "圣彼得 → Trastevere 晚餐区", "stPeters", "trastevere", "晚餐区顺路，饭后打车回酒店。", "15-25m"),

  seg("D5", "taxi", "罗马酒店区 → Roma Termini", "romeHotel", "termini", "高铁日用出租接驳，减少拖箱。", "10-20m"),
  seg("D5", "train", "Roma Termini → Firenze SMN", "termini", "firenzeSMN", "高铁约 1.5 小时，是意大利段最舒服的跨城方式。", "1.5h"),
  seg("D5", "taxi", "Firenze SMN → 佛罗伦萨酒店区", "firenzeSMN", "florenceHotel", "入住后再轻步行。", "5-12m"),
  seg("D5", "walk", "酒店区 → 圣母百花大教堂", "florenceHotel", "duomoFlorence", "只看外观或预约登顶二选一，产后同行不建议登顶。", "5-10m"),
  seg("D5", "walk", "Duomo → 领主广场", "duomoFlorence", "signoria", "平路步行，途中可随时咖啡休息。", "8m"),
  seg("D5", "walk", "领主广场 → 老桥 → Oltrarno 晚餐区", "signoria", "oltrarnoDinner", "老桥顺路经过，晚餐后打车回酒店。", "15-25m"),

  seg("D6", "walk", "酒店区 → 乌菲兹美术馆", "florenceHotel", "uffizi", "预约早场，控制在 2-3 小时。", "12m"),
  seg("D6", "walk", "乌菲兹 → 中央市场午餐区", "uffizi", "mercatoCentrale", "午餐选择多，坐下休息更稳定。", "15-20m"),
  seg("D6", "taxi", "中央市场 → 圣十字圣殿", "mercatoCentrale", "santaCroce", "下午轻量景点，累了可跳过。", "8-12m"),
  seg("D6", "taxi", "圣十字 → 米开朗琪罗广场", "santaCroce", "piazzaleMichelangelo", "上坡段不建议步行，用出租看全景。", "10-15m"),
  seg("D6", "taxi", "米开朗琪罗广场 → 酒店区", "piazzaleMichelangelo", "florenceHotel", "看完日落直接回酒店或就近晚餐。", "12-18m"),

  seg("D7", "taxi", "佛罗伦萨酒店区 → Firenze SMN", "florenceHotel", "firenzeSMN", "日游轻装出发，不带大箱。", "5-12m"),
  seg("D7", "train", "Firenze SMN → Pisa Centrale", "firenzeSMN", "pisaCentrale", "火车日游，时间短、班次多。", "50-70m"),
  seg("D7", "taxi", "Pisa Centrale → 比萨斜塔", "pisaCentrale", "leaningTower", "减少从车站到奇迹广场的步行。", "10-15m"),
  seg("D7", "walk", "比萨斜塔 → 奇迹广场午餐区", "leaningTower", "pisaLunch", "午餐就在广场周边，不绕路。", "3-8m"),
  seg("D7", "train", "比萨 → 卢卡可选", "pisaCentrale", "luccaStation", "卢卡是可取消项；如果同行疲惫，午饭后直接回佛罗伦萨。", "25-35m"),
  seg("D7", "walk", "Lucca Station → 卢卡城墙", "luccaStation", "luccaWalls", "只走一小段城墙，不做完整环线。", "10m"),
  seg("D7", "train", "卢卡 → 佛罗伦萨", "luccaStation", "firenzeSMN", "回程到 SMN 后打车回酒店。", "1.5-2h"),

  seg("D8", "taxi", "佛罗伦萨酒店区 → Firenze SMN", "florenceHotel", "firenzeSMN", "长移动日，早餐后从容出发。", "5-12m"),
  seg("D8", "train", "佛罗伦萨 → 尼斯 Nice-Ville", "firenzeSMN", "niceVille", "优先选少换乘火车；若当天班次太差，再考虑一次短飞。", "7-9h"),
  seg("D8", "taxi", "Nice-Ville → 尼斯酒店区", "niceVille", "niceHotel", "抵达后直接入住，不拖箱走老城。", "10-15m"),
  seg("D8", "walk", "酒店区 → 英国人散步大道", "niceHotel", "promenade", "只安排海边散步和顺路晚餐。", "5-12m"),
  seg("D8", "walk", "海边 → 尼斯老城晚餐区", "promenade", "niceDinner", "餐饮点贴近酒店和海边。", "8-12m"),

  seg("D9", "walk", "酒店区 → Cours Saleya", "niceHotel", "coursSaleya", "早餐/市集/咖啡都在老城附近。", "5-10m"),
  seg("D9", "walk", "Cours Saleya → 城堡山", "coursSaleya", "castleHill", "可坐电梯或只到低处观景，避免爬太多。", "10-20m"),
  seg("D9", "taxi", "尼斯老城 → 埃兹山顶小镇", "niceHotel", "eze", "埃兹半日用出租/包车，不自驾；累了就取消埃兹留在尼斯。", "30-45m"),
  seg("D9", "taxi", "埃兹 → 尼斯酒店区", "eze", "niceHotel", "不继续硬塞摩纳哥，保证恢复时间。", "30-45m"),
  seg("D9", "walk", "酒店区 → 尼斯老城晚餐区", "niceHotel", "niceDinner", "晚餐回到酒店附近。", "5-10m"),

  seg("D10", "taxi", "尼斯酒店区 → NCE", "niceHotel", "nce", "带行李日建议打车或酒店约车。", "25-40m"),
  seg("D10", "flight", "尼斯 → 巴塞罗那 BCN", "nce", "bcn", "这段保留短飞，避免 8 小时以上长火车换乘。", "1.5h"),
  seg("D10", "taxi", "BCN → Eixample 酒店区", "bcn", "bcnHotel", "三人同行带行李优先打车。", "30-45m"),
  seg("D10", "metro", "Eixample → 哥特区", "bcnHotel", "gothic", "抵达日轻走老城，注意随身物品。", "15m"),
  seg("D10", "walk", "哥特区 → 博盖利亚市场/晚餐区", "gothic", "boqueria", "晚餐就在老城路线内，不绕去远区。", "8-12m"),

  seg("D11", "metro", "酒店区 → 圣家堂", "bcnHotel", "sagrada", "预约上午时段。", "15m"),
  seg("D11", "metro", "圣家堂 → Eixample 午餐/休息", "sagrada", "eixampleDinner", "午餐回 Eixample，下午继续高迪建筑。", "15m"),
  seg("D11", "walk", "Eixample → 巴特罗之家", "eixampleDinner", "casaBatllo", "同一区域步行。", "5-10m"),
  seg("D11", "walk", "巴特罗之家 → 米拉之家", "casaBatllo", "pedrera", "Passeig de Gracia 顺路串联。", "8m"),
  seg("D11", "walk", "米拉之家 → Eixample 晚餐区", "pedrera", "eixampleDinner", "不再横跨城市吃饭。", "5-10m"),

  seg("D12", "taxi", "酒店区 → 古埃尔公园", "bcnHotel", "parkGuell", "上坡段建议出租或地铁+短打车。", "20-30m"),
  seg("D12", "metro", "古埃尔公园 → 博盖利亚市场", "parkGuell", "boqueria", "午餐在市场周边，注意人流和随身物品。", "30m"),
  seg("D12", "walk", "博盖利亚市场 → 哥特区", "boqueria", "gothic", "下午只做老城轻散步。", "8m"),
  seg("D12", "taxi", "哥特区 → 巴塞罗内塔海滩", "gothic", "barceloneta", "累了就直接回酒店，海边是可选休息点。", "10-15m"),
  seg("D12", "taxi", "海滩 → Eixample 酒店区", "barceloneta", "bcnHotel", "晚间打车回酒店。", "15-25m"),

  seg("D13", "taxi", "Eixample 酒店区 → Barcelona Sants", "bcnHotel", "sants", "高铁日减少拖箱换乘。", "10-20m"),
  seg("D13", "train", "Barcelona Sants → Paris Gare de Lyon", "sants", "gareLyon", "高铁进巴黎，市中心到市中心，避免机场折腾。", "6.5-7h"),
  seg("D13", "taxi", "Gare de Lyon → 巴黎酒店区", "gareLyon", "parisHotel", "抵达日只入住和晚餐。", "20-35m"),
  seg("D13", "walk", "酒店区 → Saint-Germain 晚餐区", "parisHotel", "saintGermainDinner", "晚餐选酒店附近，保证 D14 完整日状态。", "5-12m"),

  seg("D14", "walk", "酒店区 → 卢浮宫", "parisHotel", "louvre", "预约早场，控制参观重点。", "20-30m"),
  seg("D14", "walk", "卢浮宫 → Palais Royal 午餐区", "louvre", "parisLunch", "午餐在卢浮宫旁，避免跨区。", "8-12m"),
  seg("D14", "walk", "午餐区 → 杜乐丽花园", "parisLunch", "tuileries", "午后用花园缓冲体力。", "8m"),
  seg("D14", "walk", "杜乐丽 → 奥赛博物馆", "tuileries", "orsay", "奥赛可作为卢浮宫后的轻量替代，二选一也可以。", "15m"),
  seg("D14", "taxi", "奥赛 → 埃菲尔铁塔", "orsay", "eiffel", "傍晚看铁塔；累了只在外部看，不登塔。", "10-20m"),
  seg("D14", "boat", "埃菲尔铁塔 → 塞纳河游船", "eiffel", "seine", "当天最后一个体验，结束后打车回酒店。", "1h"),

  seg("D15", "metro", "巴黎酒店区 → 玛黑区", "parisHotel", "marais", "晚班机可轻购物；早班机直接去机场。", "15-25m"),
  seg("D15", "train", "玛黑区 → CDG", "marais", "cdg", "RER B/出租二选一，国际航班至少提前 3 小时到机场。", "45-70m")
];

function seg(day, mode, title, from, to, note, time) {
  return { day, mode, title, from, to, note, time };
}

const destinations = [
  {
    city: "罗马",
    image: "./assets/images/rome-colosseum.webp",
    days: "D1-D4",
    hotel: "romeHotel",
    highlights: ["万神殿、纳沃纳、特莱维组成低强度老城线", "斗兽场和古罗马广场单独一天预约", "梵蒂冈早场，晚上 Trastevere 顺路晚餐"],
    tempo: "罗马住 4 晚，不每天换酒店；重景点拆开，产后同行更稳。"
  },
  {
    city: "佛罗伦萨与托斯卡纳",
    image: "./assets/images/rome-colosseum.webp",
    days: "D5-D7",
    hotel: "florenceHotel",
    highlights: ["Duomo、领主广场、老桥步行串联", "乌菲兹、圣十字、米开朗琪罗广场", "比萨火车日游，卢卡作为可取消加项"],
    tempo: "增加意大利景点但不自驾，佛罗伦萨住 3 晚，减少拖箱。"
  },
  {
    city: "尼斯与蔚蓝海岸",
    image: "./assets/images/nice-eze.jpg",
    days: "D8-D9",
    hotel: "niceHotel",
    highlights: ["英国人散步大道和老城餐饮区", "城堡山低强度观景", "埃兹半日出租/包车可选，不硬塞摩纳哥"],
    tempo: "南法压缩为尼斯 2 晚，代表性体验保留，但不加入普罗旺斯。"
  },
  {
    city: "巴塞罗那",
    image: "./assets/images/barcelona-park-guell.jpg",
    days: "D10-D13",
    hotel: "bcnHotel",
    highlights: ["圣家堂、巴特罗之家、米拉之家高迪线", "古埃尔公园、哥特区、博盖利亚市场", "巴塞罗内塔作为轻松海边休息点"],
    tempo: "西班牙加到 3 晚，住 Eixample，不再加马德里/塞维利亚导致换城。"
  },
  {
    city: "巴黎",
    image: "./assets/images/paris-eiffel.jpg",
    days: "D13-D15",
    hotel: "parisHotel",
    highlights: ["D13 只抵达和晚餐", "D14 保证完整一天：卢浮宫、奥赛、铁塔三选二", "D15 返程前轻购物或直接机场"],
    tempo: "巴黎不再今天到明天走，至少有一个完整日程。"
  }
];

const candidateAttractions = [
  {
    city: "罗马",
    base: "romeHotel",
    note: "罗马候选景点很多，但低强度版本只建议同一区域替换，不要在一天内横跨古城、梵蒂冈和远郊。",
    items: [
      ["博尔盖塞美术馆", 5, "中等", "需预约", "适合替换 D2 下午；搭配 Villa Borghese 花园，别和梵蒂冈同天硬塞。", "Galleria Borghese Rome"],
      ["圣天使堡", 4, "中低", "建议预约", "适合 D4 梵蒂冈后顺路加；若圣彼得排队太久可二选一。", "Castel Sant'Angelo Rome"],
      ["卡比托利欧博物馆", 4, "中等", "建议预约", "适合 D3 古罗马线替换；离古罗马广场近，不绕路。", "Capitoline Museums Rome"],
      ["西班牙台阶", 3, "低", "免预约", "适合 D2 特莱维前后顺路加；拍照点，不需要单独绕行。", "Spanish Steps Rome"],
      ["鲜花广场 Campo de' Fiori", 3, "低", "免预约", "适合 D2 午餐前后；和纳沃纳、万神殿同区。", "Campo de' Fiori Rome"],
      ["圣母大殿", 3, "低", "通常免预约", "适合 D1/D5 车站附近空档；靠近 Termini，不适合作为专门跨城点。", "Basilica di Santa Maria Maggiore Rome"],
      ["卡拉卡拉浴场", 3, "中等", "建议查票", "适合古罗马爱好者替换 D3 下午；比老城核心更分散。", "Baths of Caracalla Rome"],
      ["阿皮亚古道/地下墓穴", 2, "高", "建议跟团", "远郊半日，低强度版本不优先，除非删掉其他罗马景点。", "Appian Way Catacombs Rome"]
    ]
  },
  {
    city: "佛罗伦萨 / 托斯卡纳",
    base: "florenceHotel",
    note: "佛罗伦萨适合步行，但桥南和观景点有坡；托斯卡纳小镇如果不自驾，优先火车或小团。",
    items: [
      ["学院美术馆", 5, "中等", "需预约", "适合替换 D6 圣十字；看大卫像，馆内时间可控制。", "Galleria dell'Accademia Florence"],
      ["美第奇礼拜堂", 4, "中低", "建议预约", "靠近中央市场和圣洛伦佐，适合 D6 午餐前后加。", "Medici Chapels Florence"],
      ["圣母百花大教堂博物馆", 4, "中等", "建议预约", "比登穹顶更适合低强度；适合 D5/D6 替换。", "Opera del Duomo Museum Florence"],
      ["皮蒂宫", 4, "中等", "建议预约", "适合替换 D6 下午；和老桥、Oltrarno 顺路。", "Pitti Palace Florence"],
      ["波波里花园", 3, "中高", "需体力", "有坡和台阶；产后同行不建议作为必选，只在天气好且体力足时加。", "Boboli Gardens Florence"],
      ["圣母玛利亚新教堂", 3, "低", "建议查开放", "离 SMN 车站近，适合 D5 抵达后轻量参观。", "Santa Maria Novella Florence"],
      ["锡耶纳", 4, "高", "小团/火车", "托斯卡纳经典，但会占一整天；可替换 D7 比萨+卢卡。", "Siena Italy"],
      ["圣吉米尼亚诺", 4, "高", "小团更顺", "无自驾不算轻松；想看小镇塔楼可用小团替换 D7。", "San Gimignano Italy"],
      ["卢卡", 3, "中低", "免预约", "比萨后可选；平缓适合散步，但累了就取消。", "Lucca Italy"]
    ]
  },
  {
    city: "尼斯 / 蔚蓝海岸",
    base: "niceHotel",
    note: "尼斯比普罗旺斯更适合无自驾；候选点按火车/出租可达来选，不建议一天塞多个海岸小镇。",
    items: [
      ["夏加尔国家博物馆", 4, "中低", "建议查票", "适合 D9 上午下雨或不想去埃兹时替换。", "Marc Chagall National Museum Nice"],
      ["马蒂斯博物馆", 3, "中低", "建议查票", "在 Cimiez 区，适合用出租往返，不和埃兹同天硬塞。", "Musee Matisse Nice"],
      ["Villa Ephrussi de Rothschild", 4, "中等", "建议查票", "Cap-Ferrat 花园别墅，适合替换埃兹；用出租/包车更舒服。", "Villa Ephrussi de Rothschild"],
      ["Saint-Jean-Cap-Ferrat", 4, "中等", "免预约", "海角散步很美，但步行量可大；只走短段即可。", "Saint-Jean-Cap-Ferrat France"],
      ["摩纳哥", 3, "中高", "火车/出租", "可替换埃兹，但不建议埃兹+摩纳哥+尼斯同日全塞。", "Monaco Monte Carlo"],
      ["芒通 Menton", 4, "中等", "火车", "色彩小城，适合替换埃兹；比摩纳哥更松弛。", "Menton France"],
      ["昂蒂布 Antibes", 3, "中等", "火车", "老城和海边轻松，适合替换埃兹半日。", "Antibes France"],
      ["圣保罗德旺斯", 3, "中等", "出租/巴士", "山城艺术村，无自驾建议出租或包车，不建议带大箱。", "Saint-Paul-de-Vence France"]
    ]
  },
  {
    city: "巴塞罗那",
    base: "bcnHotel",
    note: "巴塞罗那候选多，但扒手和排队成本也高；加点时优先选 Eixample、哥特区、海边同线景点。",
    items: [
      ["加泰罗尼亚音乐宫", 4, "中低", "建议预约", "适合 D12 哥特区附近替换；建筑参观时间可控。", "Palau de la Musica Catalana Barcelona"],
      ["毕加索博物馆", 4, "中等", "建议预约", "适合 D12 老城线替换海边；馆内比户外更稳。", "Picasso Museum Barcelona"],
      ["圣保罗医院建筑群", 4, "中低", "建议查票", "离圣家堂不远，适合 D11 圣家堂后替换米拉之家。", "Hospital de Sant Pau Barcelona"],
      ["Casa Vicens", 3, "中低", "建议预约", "高迪早期建筑，适合替换古埃尔公园或作为轻量加点。", "Casa Vicens Barcelona"],
      ["蒙锥克 / MNAC", 3, "中高", "视体力", "景观好但上下坡和交通转换较多；不建议和古埃尔公园同天。", "Museu Nacional d'Art de Catalunya Barcelona"],
      ["Palau Guell", 4, "中低", "建议预约", "靠近兰布拉大道和博盖利亚，适合 D12 顺路替换。", "Palau Guell Barcelona"],
      ["Sitges 海边小镇", 3, "中等", "火车", "想要轻松海边日可替换 D12；比 Montserrat 更适合低强度。", "Sitges Spain"],
      ["Montserrat", 3, "高", "整日", "风景好但交通和步行强度高；除非删掉巴塞罗那市内一天。", "Montserrat Monastery Spain"]
    ]
  },
  {
    city: "巴黎",
    base: "parisHotel",
    note: "巴黎只有一个完整日，候选景点要严格二选一/三选二；不要把博物馆、铁塔、凡尔赛塞在同一天。",
    items: [
      ["圣礼拜堂", 5, "中低", "需预约", "适合 D14 卢浮宫前后替换奥赛；和彩色玻璃体验相关。", "Sainte-Chapelle Paris"],
      ["橘园美术馆", 4, "中低", "建议预约", "离杜乐丽很近，适合替换奥赛，路线更顺。", "Musee de l'Orangerie Paris"],
      ["巴黎歌剧院", 4, "中低", "建议查票", "适合 D15 晚班机前轻量加点；离购物区近。", "Palais Garnier Paris"],
      ["卢森堡公园", 3, "低", "免预约", "靠近左岸酒店区，适合 D13/D15 放松。", "Luxembourg Gardens Paris"],
      ["罗丹美术馆", 4, "中低", "建议预约", "离奥赛/荣军院不远，适合替换铁塔前的室内点。", "Musee Rodin Paris"],
      ["凯旋门", 4, "中等", "建议预约", "可替换塞纳河游船或铁塔登塔；不建议再加香街长走。", "Arc de Triomphe Paris"],
      ["蒙马特 / 圣心堂", 3, "中高", "坡多", "适合 D15 晚班机前轻量去；产后同行体力不足时不优先。", "Sacré-Cœur Montmartre Paris"],
      ["凡尔赛宫", 3, "高", "整日", "巴黎只有一个完整日时不建议；除非删掉市区经典。", "Palace of Versailles"]
    ]
  }
];

const hotelZones = [
  ["罗马", "Monti / Colosseo 酒店区", "romeHotel", "到斗兽场、古罗马广场、Termini 都顺，抵达和离城省力。", "拖箱日用出租，避免石板路。"],
  ["佛罗伦萨", "Duomo / Santa Maria Novella", "florenceHotel", "离车站和核心步行区都近，适合 3 晚固定住宿。", "别住太深的老城小巷，拖箱会累。"],
  ["尼斯", "老城 / Promenade 周边", "niceHotel", "步行到海边和老城，去机场/车站也不绕。", "南法只住尼斯，不换普罗旺斯酒店。"],
  ["巴塞罗那", "Eixample 酒店区", "bcnHotel", "安全感和交通平衡最好，高迪建筑都容易到。", "哥特区有氛围但夜间和拖箱体验弱。"],
  ["巴黎", "Saint-Germain / Latin Quarter", "parisHotel", "到卢浮宫、奥赛、塞纳河和左岸餐厅都顺。", "巴黎至少 2 晚，保证 D14 完整日。"]
];

const transfers = [
  ["西安 → 罗马", "飞机", "土耳其已删除，第一站直入意大利，减少一次跨洲跳转和机场折腾。", "抵达日只休息。"],
  ["罗马 → 佛罗伦萨", "高铁", "意大利段用高铁，市中心到市中心，少拖箱。", "提前买 Frecciarossa/Italo 合适时段。"],
  ["佛罗伦萨 → 尼斯", "火车优先 / 飞机备选", "为了减少飞机，地图按火车串联；如果实际班次换乘过多，可改一次短飞。", "这天只作为移动日。"],
  ["尼斯 → 巴塞罗那", "飞机", "不自驾且低强度前提下，这段保留短飞比长火车换乘更友好。", "抵达后只排晚餐。"],
  ["巴塞罗那 → 巴黎", "高铁", "保留高铁，避免再多一次机场流程。", "D13 抵达，D14 完整巴黎。"]
];

const cityTransports = [
  ["罗马", "老城核心步行，跨区用出租；梵蒂冈和 Trastevere 不硬靠步行串。"],
  ["佛罗伦萨/托斯卡纳", "市内步行为主，上坡去米开朗琪罗广场用出租；比萨/卢卡用火车，卢卡可取消。"],
  ["尼斯", "市区步行+出租；埃兹用出租/包车半日，不自驾，不硬塞摩纳哥。"],
  ["巴塞罗那", "Eixample 到高迪景点用地铁/出租；古埃尔公园上坡，建议出租。"],
  ["巴黎", "市内地铁/出租结合；拖箱时优先出租，去 CDG 按航班选择 RER B 或出租。"]
];

const foodGuide = [
  {
    day: "D1/D3 罗马",
    title: "Monti / Colosseo 酒店区",
    placeKey: "montiDinner",
    route: "适合抵达日晚餐、斗兽场/古罗马广场后午餐或晚餐；从 Monti 酒店区步行或短打车即可。",
    fit: "不跨河、不进远区，适合拖箱日或体力保守日。",
    restaurants: [
      { name: "La Taverna dei Fori Imperiali", type: "正餐", dish: "Carbonara / Saltimbocca", note: "靠近古罗马线，适合 D3 参观后坐下吃饭；热门时段建议预约。", query: "La Taverna dei Fori Imperiali Rome" },
      { name: "Ai Tre Scalini", type: "小酒馆", dish: "葡萄酒 / 小盘菜", note: "Monti 酒店区附近，适合 D1 抵达后轻松晚餐；座位不多，别排太久。", query: "Ai Tre Scalini Rome" },
      { name: "Urbana 47", type: "轻正餐", dish: "意面 / 早午餐", note: "靠 Via Urbana，适合不想吃太正式的一餐，回酒店路线顺。", query: "Urbana 47 Rome" }
    ]
  },
  {
    day: "D2 罗马",
    title: "万神殿 / 纳沃纳 / Campo de' Fiori",
    placeKey: "pantheonLunch",
    route: "夹在万神殿、纳沃纳和特莱维之间，午餐、咖啡和小吃都不需要改路线。",
    fit: "D2 是倒时差轻松线，优先选近、能预约、能快速落座的餐厅。",
    restaurants: [
      { name: "Armando al Pantheon", type: "正餐", dish: "罗马经典意面", note: "就在万神殿旁，位置极顺；非常热门，适合提前订午餐。", query: "Armando al Pantheon Rome" },
      { name: "Roscioli Salumeria con Cucina", type: "正餐", dish: "Carbonara / 奶酪火腿", note: "靠 Campo de' Fiori，适合万神殿到纳沃纳之间绕一点点；建议预约。", query: "Roscioli Salumeria con Cucina Rome" },
      { name: "Sant'Eustachio Il Caffe", type: "咖啡", dish: "Espresso / Gran Caffe", note: "万神殿旁的短暂停靠点，适合补咖啡，不作为正式用餐。", query: "Sant'Eustachio Il Caffe Rome" }
    ]
  },
  {
    day: "D4 罗马",
    title: "Trastevere 晚餐区",
    placeKey: "trastevere",
    route: "从圣彼得大教堂打车过去顺路，饭后再打车回 Monti 酒店区。",
    fit: "Trastevere 夜间热闹，但石板路多；同行累了就选可预约、有座位的店。",
    restaurants: [
      { name: "Da Enzo al 29", type: "正餐", dish: "Cacio e pepe / 炖菜", note: "经典小馆，排队可能长；如果队伍太久直接换同区备选。", query: "Da Enzo al 29 Rome" },
      { name: "Trattoria Da Teo", type: "正餐", dish: "罗马家常菜", note: "更适合作为坐下晚餐备选，位置仍在 Trastevere 核心。", query: "Trattoria Da Teo Rome" },
      { name: "Otaleg", type: "甜品", dish: "Gelato", note: "饭后甜品点，适合晚餐后短走，不建议为了甜品单独跨区。", query: "Otaleg Trastevere Rome" }
    ]
  },
  {
    day: "D5-D7 佛罗伦萨",
    title: "SMN / Duomo / Uffizi",
    placeKey: "mercatoCentrale",
    route: "围绕佛罗伦萨酒店区、Duomo、乌菲兹和中央市场；D5/D6/D7 都能顺路使用。",
    fit: "佛罗伦萨步行方便，但热门店排队明显；带产后同行时优先有座位的正餐或市场。",
    restaurants: [
      { name: "Mercato Centrale Firenze", type: "市场", dish: "披萨 / 意面 / 牛肚包", note: "D6 乌菲兹后午餐最稳，选择多，有座位，适合三个人分开点。", query: "Mercato Centrale Firenze" },
      { name: "Trattoria Mario", type: "午餐", dish: "Bistecca / 托斯卡纳菜", note: "靠中央市场，适合 D6 午餐；通常更偏午餐节奏，注意营业时间。", query: "Trattoria Mario Florence" },
      { name: "Trattoria Cammillo", type: "晚餐", dish: "Tortellini / 家常菜", note: "Oltrarno 方向，适合 D5 老桥后晚餐；从酒店回程可打车。", query: "Trattoria Cammillo Florence" },
      { name: "All'Antico Vinaio", type: "小吃", dish: "佛罗伦萨三明治", note: "适合快餐体验，但排队常见；不建议为了它牺牲正式休息。", query: "All'Antico Vinaio Florence" }
    ]
  },
  {
    day: "D8-D9 尼斯",
    title: "老城 / Cours Saleya / Promenade",
    placeKey: "coursSaleya",
    route: "围绕尼斯老城、海边和酒店区；D8 抵达日晚餐、D9 城堡山后都顺。",
    fit: "南法段压缩后不追远餐厅，优先尼斯老城和海边步行范围。",
    restaurants: [
      { name: "Chez Acchiardo", type: "正餐", dish: "尼斯本地菜", note: "老城内，适合 D9 晚餐；热门店建议提前确认预约。", query: "Chez Acchiardo Nice" },
      { name: "Le Safari", type: "正餐", dish: "海鲜 / Niçoise", note: "Cours Saleya 旁，市集和城堡山之间最顺路。", query: "Le Safari Nice" },
      { name: "Peixes", type: "海鲜", dish: "鱼类小盘 / Ceviche", note: "靠老城和海边，适合想吃轻一点的海鲜晚餐。", query: "Peixes Nice" },
      { name: "Fenocchio", type: "甜品", dish: "Gelato", note: "老城经典冰淇淋点，适合散步途中短停。", query: "Fenocchio Nice" }
    ]
  },
  {
    day: "D10-D11 巴塞罗那",
    title: "Eixample / Passeig de Gracia",
    placeKey: "eixampleDinner",
    route: "贴合酒店区、圣家堂、巴特罗之家和米拉之家；高迪线当天不用回老城找晚餐。",
    fit: "Eixample 比老城更适合晚间回酒店，三人同行也更好打车。",
    restaurants: [
      { name: "Ciudad Condal", type: "Tapas", dish: "炸物 / 海鲜小盘", note: "靠 Passeig de Gracia，适合 D11 高迪线；排队时可换 Vinitus。", query: "Ciudad Condal Barcelona" },
      { name: "Vinitus", type: "Tapas", dish: "海鲜 / 烤蔬菜", note: "Eixample 酒店区顺路，适合 D11 晚餐或 D10 抵达后轻食。", query: "Vinitus Barcelona" },
      { name: "Paco Meralgo", type: "Tapas", dish: "Croquetas / 烤章鱼", note: "Eixample 更安静的坐下选择，适合不想在景点区排长队。", query: "Paco Meralgo Barcelona" }
    ]
  },
  {
    day: "D12 巴塞罗那",
    title: "哥特区 / 博盖利亚 / 海边",
    placeKey: "boqueria",
    route: "贴合古埃尔公园之后的博盖利亚市场、哥特区和巴塞罗内塔海边。",
    fit: "老城人多，午餐尽量早一点；晚间回 Eixample 酒店区建议打车。",
    restaurants: [
      { name: "Bar Cañete", type: "正餐", dish: "Tapas / 海鲜", note: "靠兰布拉和老城，适合 D12 午晚餐；建议预约。", query: "Bar Canete Barcelona" },
      { name: "El Quim de la Boqueria", type: "市场", dish: "煎蛋 / 海鲜小盘", note: "就在博盖利亚市场内，顺路但可能排队，适合早午餐。", query: "El Quim de la Boqueria Barcelona" },
      { name: "Xiringuito Escribà", type: "海边正餐", dish: "海鲜饭", note: "适合 D12 海边作为坐下晚餐；从海边回酒店直接打车。", query: "Xiringuito Escriba Barcelona" }
    ]
  },
  {
    day: "D13 巴黎",
    title: "Saint-Germain / Latin Quarter 酒店区",
    placeKey: "saintGermainDinner",
    route: "高铁抵达巴黎后只在酒店周边吃晚餐，给 D14 完整日程留体力。",
    fit: "抵达日不穿越巴黎觅食，选择左岸酒店区步行可达或短打车餐厅。",
    restaurants: [
      { name: "Le Procope", type: "历史餐厅", dish: "法式小酒馆菜", note: "靠 Odéon，适合 D13 抵达日晚餐；体验感强，建议预约。", query: "Le Procope Paris" },
      { name: "Semilla", type: "正餐", dish: "现代法餐", note: "Saint-Germain 内，适合想吃更精致的一餐；建议预约。", query: "Semilla Paris restaurant" },
      { name: "Breizh Café Odéon", type: "轻正餐", dish: "可丽饼 / Cidre", note: "比正式法餐更轻松，适合抵达日晚餐或 D15 简餐。", query: "Breizh Cafe Odeon Paris" }
    ]
  },
  {
    day: "D14 巴黎",
    title: "卢浮宫 / 奥赛 / 埃菲尔",
    placeKey: "parisLunch",
    route: "午餐靠卢浮宫和 Palais Royal，晚餐顺着奥赛到铁塔方向选，不回头绕路。",
    fit: "巴黎完整日景点强度高，餐厅优先靠路线中点或终点，避免地铁折返。",
    restaurants: [
      { name: "Bistrot Victoires", type: "午餐", dish: "牛排薯条 / 鸭肉", note: "Palais Royal 附近，适合卢浮宫后午餐；不适合排长队时硬等。", query: "Bistrot Victoires Paris" },
      { name: "Les Antiquaires", type: "正餐", dish: "法式小酒馆菜", note: "靠奥赛，适合 D14 博物馆后坐下休息。", query: "Les Antiquaires Paris" },
      { name: "Café Constant", type: "晚餐", dish: "法式家常菜", note: "铁塔附近，适合看铁塔前后；以当天营业和预约为准。", query: "Cafe Constant Paris" }
    ]
  }
];

const reservations = [
  ["斗兽场", "建议提前 2-4 周", "优先早场，联动古罗马广场/帕拉蒂尼山。", "https://www.colosseo.it/en/tickets/"],
  ["梵蒂冈博物馆", "建议提前 3-4 周", "早场最好，别和斗兽场同一天硬塞。", "https://tickets.museivaticani.va/"],
  ["乌菲兹美术馆", "建议提前 2-4 周", "控制在 2-3 小时，不用把全馆刷完。", "https://www.uffizi.it/en/tickets"],
  ["佛罗伦萨大教堂", "建议提前 1-2 周", "产后同行不建议登穹顶；外观和教堂区即可。", "https://duomo.firenze.it/en/tickets"],
  ["比萨斜塔", "建议提前 1-2 周", "如果只外观看拍照可不登塔。", "https://www.opapisa.it/en/tickets/"],
  ["圣家堂", "建议提前 2-4 周", "塔楼票和普通票不同，上午光线更稳。", "https://sagradafamilia.org/en/tickets"],
  ["巴特罗之家/米拉之家", "建议提前 1-2 周", "同一天串联，留足休息时间。", "https://www.casabatllo.es/en/online-tickets/"],
  ["古埃尔公园", "建议提前 1-2 周", "上坡交通要算进去，别和圣家堂排太近。", "https://parkguell.barcelona/en/buy-tickets"],
  ["卢浮宫", "建议提前 2-4 周", "只选重点馆区，保证巴黎完整日不崩。", "https://ticket.louvre.fr/"],
  ["埃菲尔铁塔/奥赛", "建议提前 1-3 周", "铁塔看天气；奥赛适合作为卢浮宫后的轻量选择。", "https://www.toureiffel.paris/en/rates-opening-times"]
];

const notices = [
  ["路线取舍", "已删除土耳其和普罗旺斯，南法只留尼斯，换来意大利和西班牙更完整。"],
  ["不自驾", "全程不自驾；需要轻松的地方用出租、包车半日或火车。"],
  ["产后低强度", "每天最多一个重预约；抵达日和跨城日只排酒店附近晚餐。"],
  ["行李", "拖箱日统一出租接驳车站/机场，避免罗马石板路、佛罗伦萨老城和巴黎地铁楼梯。"],
  ["餐饮", "具体餐厅只放在当天路线中间或终点附近；热门店先查营业和预约，不为了吃饭横跨城市。"],
  ["安全", "巴塞罗那、巴黎、罗马热门景点注意扒手；手机不要放外套口袋或桌面。"],
  ["票务", "所有预约以官方页面为准；旺季不要依赖现场票。"],
  ["交通", "地图线段展示点到点关系，真实转乘以 Google Maps/当地交通 App 当日结果为准。"]
];

let routeMap;
let markerLayer;
let routeLayer;
let activeDay = "all";

function mapsDirections(segment) {
  const from = places[segment.from];
  const to = places[segment.to];
  const mode = modes[segment.mode].mapsMode;
  return `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(from.query)}&destination=${encodeURIComponent(to.query)}&travelmode=${mode}`;
}

function mapsSearch(place) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.query)}`;
}

function mapsSearchQuery(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function stars(value) {
  const rating = Math.max(0, Math.min(5, Number(value) || 0));
  return `${"★".repeat(rating)}${"☆".repeat(5 - rating)}`;
}

function ratingBadge(value, label = "路线优先级") {
  if (!value) return "";
  return `<span class="rating-stars" title="${label} ${value}/5" aria-label="${label}${value}星">${stars(value)}</span>`;
}

function iconFor(type, label) {
  const color = {
    airport: modes.flight.color,
    station: modes.train.color,
    hotel: "#c6972f",
    sight: "#d95d39",
    food: "#3a8f61"
  }[type] || "#0e7c7b";
  return L.divIcon({
    className: "map-marker-shell",
    html: `<span class="map-marker" style="--marker-color:${color}">${label}</span>`,
    iconSize: [34, 34],
    iconAnchor: [17, 17],
    popupAnchor: [0, -17]
  });
}

function markerLabel(place) {
  if (place.type === "airport") return "P";
  if (place.type === "station") return "R";
  if (place.type === "hotel") return "H";
  if (place.type === "food") return "F";
  return "S";
}

function filteredSegments() {
  return activeDay === "all" ? segments : segments.filter((segment) => segment.day === activeDay);
}

function mapSegments() {
  return filteredSegments().filter((segment) => segment.from !== "xianAirport" && segment.to !== "xianAirport");
}

function initMap() {
  routeMap = L.map("routeMap", {
    zoomControl: true,
    worldCopyJump: true,
    dragging: true,
    scrollWheelZoom: false
  });
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(routeMap);
  markerLayer = L.layerGroup().addTo(routeMap);
  routeLayer = L.layerGroup().addTo(routeMap);
  drawMap();
}

function drawMap() {
  markerLayer.clearLayers();
  routeLayer.clearLayers();
  const shown = mapSegments();
  const placeKeys = [...new Set(shown.flatMap((segment) => [segment.from, segment.to]))];

  shown.forEach((segment) => {
    const from = places[segment.from];
    const to = places[segment.to];
    const mode = modes[segment.mode];
    L.polyline([[from.lat, from.lng], [to.lat, to.lng]], {
      color: mode.color,
      weight: segment.mode === "flight" ? 3 : 4,
      opacity: 0.84,
      dashArray: segment.mode === "walk" ? "2 8" : segment.mode === "flight" ? "8 12" : null
    }).addTo(routeLayer).bindPopup(segmentPopup(segment));
  });

  placeKeys.forEach((key) => {
    const place = places[key];
    L.marker([place.lat, place.lng], {
      icon: iconFor(place.type, markerLabel(place)),
      title: place.name
    })
      .addTo(markerLayer)
      .bindPopup(placePopup(key));
  });

  const bounds = L.latLngBounds(placeKeys.map((key) => [places[key].lat, places[key].lng]));
  if (bounds.isValid()) routeMap.fitBounds(bounds.pad(0.14));
}

function placePopup(key) {
  const place = places[key];
  const typeLabel = {
    sight: "景点",
    hotel: "酒店区",
    airport: "机场",
    station: "交通点",
    food: "餐饮/休息点"
  }[place.type] || "地点";
  return `
    <div class="popup-card">
      <strong>${place.name}</strong>
      ${place.type === "sight" ? ratingBadge(placeRatings[key]) : ""}
      <span>${typeLabel}</span>
      <a href="${mapsSearch(place)}" target="_blank" rel="noopener">Google Maps 定位</a>
    </div>
  `;
}

function segmentPopup(segment) {
  const mode = modes[segment.mode];
  return `
    <div class="popup-card">
      <strong>${segment.title}</strong>
      <span style="color:${mode.color}">${mode.label} · ${segment.time}</span>
      <p>${segment.note}</p>
      <a href="${mapsDirections(segment)}" target="_blank" rel="noopener">打开路线</a>
    </div>
  `;
}

function renderFilters() {
  document.querySelector("#dayFilters").innerHTML = days.map((day) => `
    <button class="filter-button ${day.id === activeDay ? "is-active" : ""}" type="button" data-day="${day.id}">
      ${day.label}
    </button>
  `).join("");

  document.querySelectorAll(".filter-button").forEach((button) => {
    button.addEventListener("click", () => {
      activeDay = button.dataset.day;
      renderFilters();
      drawMap();
    });
  });
}

function renderLegend() {
  document.querySelector("#modeLegend").innerHTML = [
    ...Object.values(modes).map((mode) => `
      <div class="legend-item">
        <span class="legend-swatch" style="--swatch-color:${mode.color}"></span>
        <span>${mode.label}</span>
      </div>
    `),
    `<div class="legend-item"><span class="legend-dot"></span><span>餐饮/休息点</span></div>`
  ].join("");
}

function renderDayCards() {
  const dayCards = days.filter((day) => day.id !== "all").map((day) => {
    const daySegments = segments.filter((segment) => segment.day === day.id);
    return `
      <article class="day-card">
        <header class="day-card-header">
          <div>
            <strong>${day.date}</strong>
            <h3>${day.title}</h3>
          </div>
          <span>${day.summary}</span>
        </header>
        <ul class="segment-list">
          ${daySegments.map(segmentItem).join("")}
        </ul>
      </article>
    `;
  });
  document.querySelector("#dayCards").innerHTML = dayCards.join("");
}

function renderStats() {
  document.querySelector("#segmentCount").textContent = segments.length;
  document.querySelector("#modeCount").textContent = Object.keys(modes).length;
}

function renderDestinations() {
  document.querySelector("#destinationCards").innerHTML = destinations.map((destination) => {
    const hotel = places[destination.hotel];
    return `
      <article class="destination-card">
        <img src="${destination.image}" alt="${destination.city}">
        <div class="destination-body">
          <div class="destination-meta">
            <span>${destination.days}</span>
            <a href="${mapsSearch(hotel)}" target="_blank" rel="noopener">${hotel.name}</a>
          </div>
          <h3>${destination.city}</h3>
          <ul>
            ${destination.highlights.map((item) => `<li>${item}</li>`).join("")}
          </ul>
          <p>${destination.tempo}</p>
        </div>
      </article>
    `;
  }).join("");
}

function renderCandidates() {
  document.querySelector("#candidateGuide").innerHTML = candidateAttractions.map((group) => {
    const base = places[group.base];
    return `
      <article class="candidate-card">
        <header>
          <div>
            <span>${group.city}</span>
            <h3>${group.city}候选景点</h3>
          </div>
          <a href="${mapsSearch(base)}" target="_blank" rel="noopener">酒店区定位</a>
        </header>
        <p>${group.note}</p>
        <ul>
          ${group.items.map(([name, rating, intensity, booking, detail, query]) => `
            <li>
              <div class="candidate-title">
                <div class="candidate-name">
                  <strong>${name}</strong>
                  ${ratingBadge(rating)}
                </div>
                <a href="${mapsSearchQuery(query)}" target="_blank" rel="noopener">地图</a>
              </div>
              <div class="candidate-meta">
                <span>${intensity}</span>
                <span>${booking}</span>
              </div>
              <p>${detail}</p>
            </li>
          `).join("")}
        </ul>
      </article>
    `;
  }).join("");
}

function renderHotels() {
  document.querySelector("#hotelGuide").innerHTML = hotelZones.map(([city, area, placeKey, detail, note]) => {
    const place = places[placeKey];
    return `
      <article class="hotel-card">
        <span>${city}</span>
        <h3>${area}</h3>
        <p>${detail}</p>
        <p>${note}</p>
        <a class="maps-link" href="${mapsSearch(place)}" target="_blank" rel="noopener">Google Maps 酒店定位</a>
      </article>
    `;
  }).join("");
}

function segmentItem(segment) {
  const mode = modes[segment.mode];
  const from = places[segment.from];
  const to = places[segment.to];
  const toRating = to.type === "sight" ? placeRatings[segment.to] : null;
  return `
    <li class="segment-item">
      <span class="mode-pill" style="--mode-color:${mode.color}">
        <span class="mode-dot"></span>${mode.label}
      </span>
      <div>
        <p class="segment-title">${from.name} → ${to.name} ${ratingBadge(toRating)}</p>
        <p class="segment-note">${segment.note}</p>
        <a class="maps-link" href="${mapsDirections(segment)}" target="_blank" rel="noopener">Google Maps 路线</a>
      </div>
      <span class="segment-time">${segment.time}</span>
    </li>
  `;
}

function renderTransfers() {
  document.querySelector("#transferGuide").innerHTML = transfers.map(([title, mode, detail, note]) => `
    <article class="guide-card">
      <h3>${title}</h3>
      <div class="meta"><span>${mode}</span></div>
      <p>${detail}</p>
      <p>${note}</p>
    </article>
  `).join("");

  document.querySelector("#cityTransportGuide").innerHTML = cityTransports.map(([title, detail]) => `
    <article class="guide-card city-transport-card">
      <h3>${title}</h3>
      <div class="meta"><span>市内交通</span></div>
      <p>${detail}</p>
    </article>
  `).join("");
}

function renderFoodGuide() {
  document.querySelector("#foodGuide").innerHTML = foodGuide.map((group) => {
    const place = places[group.placeKey];
    return `
      <article class="food-card">
        <span>${group.day}</span>
        <h3>${group.title}</h3>
        <p>${group.route}</p>
        <p class="food-fit">${group.fit}</p>
        <ul class="restaurant-list">
          ${group.restaurants.map((restaurant) => `
            <li class="restaurant-item">
              <div class="restaurant-head">
                <strong>${restaurant.name}</strong>
                <a href="${mapsSearchQuery(restaurant.query)}" target="_blank" rel="noopener">地图</a>
              </div>
              <div class="restaurant-meta">
                <span>${restaurant.type}</span>
                <span>${restaurant.dish}</span>
              </div>
              <p>${restaurant.note}</p>
            </li>
          `).join("")}
        </ul>
        <a class="maps-link" href="${mapsSearch(place)}" target="_blank" rel="noopener">Google Maps 区域餐饮搜索</a>
      </article>
    `;
  }).join("");
}

function renderReservations() {
  document.querySelector("#reservationGuide").innerHTML = reservations.map(([name, timing, detail, url]) => `
    <article class="reservation-card">
      <h3>${name}</h3>
      <div class="meta"><span>${timing}</span></div>
      <p>${detail}</p>
      <a class="ticket-link" href="${url}" target="_blank" rel="noopener">官方/参考购票入口</a>
    </article>
  `).join("");
}

function renderNotices() {
  document.querySelector("#noticeGrid").innerHTML = notices.map(([title, text]) => `
    <article class="notice-card">
      <h3>${title}</h3>
      <p>${text}</p>
    </article>
  `).join("");
}

function init() {
  renderStats();
  renderFilters();
  renderLegend();
  renderHotels();
  renderDestinations();
  renderCandidates();
  renderDayCards();
  renderTransfers();
  renderFoodGuide();
  renderReservations();
  renderNotices();
  initMap();
}

init();
