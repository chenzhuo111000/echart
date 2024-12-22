// 角色關係配置
const characterRelationships = {
  // 闡教陣營
  "哪吒": {
    allies: ["李靖", "楊戩"],
    counters: ["石磯", "九尾狐妖"],
    counteredBy: ["太上老君", "石磯"]
  },
  "李靖": {
    allies: ["哪吒", "元始天尊"],
    counters: ["九尾狐妖"],
    counteredBy: ["石磯"]
  },
  "楊戩": {
    allies: ["哪吒", "元始天尊"],
    counters: ["石磯"],
    counteredBy: ["太上老君"]
  },
  "元始天尊": {
    allies: ["李靖", "楊戩"],
    counters: ["石磯", "九尾狐妖"],
    counteredBy: []
  },
  
  // 天庭陣營
  "太上老君": {
    allies: ["元始天尊"],
    counters: ["哪吒", "楊戩"],
    counteredBy: []
  },
  
  // 創世神
  "女媧": {
    allies: ["伏羲"],
    counters: [],
    counteredBy: []
  },
  "伏羲": {
    allies: ["女媧"],
    counters: [],
    counteredBy: []
  },
  
  // 截教妖道
  "九尾狐妖": {
    allies: ["石磯"],
    counters: [],
    counteredBy: ["李靖", "元始天尊"]
  },
  "石磯": {
    allies: ["九尾狐妖"],
    counters: ["李靖", "哪吒"],
    counteredBy: ["楊戩", "元始天尊"]
  },
  
  // 西天取經
  "孫悟空": {
    allies: [],
    counters: ["白骨精", "琵琶精"],
    counteredBy: []
  },
  "白骨精": {
    allies: ["琵琶精"],
    counters: [],
    counteredBy: ["孫悟空"]
  },
  "琵琶精": {
    allies: ["白骨精"],
    counters: [],
    counteredBy: ["孫悟空"]
  }
};

// 獲取角色關係的函數
function getCharacterRelationships(characterName) {
  return characterRelationships[characterName] || {
    allies: [],
    counters: [],
    counteredBy: []
  };
}

// 獲取特定陣營的所有角色
function getCharactersByCategory(category) {
  const categoryMap = {
    "闡教": ["哪吒", "李靖", "楊戩", "元始天尊"],
    "天庭": ["太上老君"],
    "創世神": ["女媧", "伏羲"],
    "截教妖道": ["九尾狐妖", "石磯"],
    "西天取經": ["孫悟空", "白骨精", "琵琶精"]
  };
  return categoryMap[category] || [];
}

export { 
  characterRelationships, 
  getCharacterRelationships,
  getCharactersByCategory 
}; 