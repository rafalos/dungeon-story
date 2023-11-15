import { EquipmentBase } from '../../types';

const Equipment: EquipmentBase[] = [
  {
    name: 'Iron Shortsword',
    slot: 'weapon',
    icon: 'https://res.cloudinary.com/dxctkhax8/image/upload/v1700052920/swords/uu2weijhhgvbqznhurxr.png',
    modifiers: [['strength', 3]],
  },
  {
    name: 'Iron Longsword',
    slot: 'weapon',
    icon: 'https://res.cloudinary.com/dxctkhax8/image/upload/v1700052904/swords/sh70xr52nxgtcgwhbhud.png',
    modifiers: [['strength', 5]],
  },
  {
    name: 'Golden Knife',
    slot: 'weapon',
    icon: 'https://res.cloudinary.com/dxctkhax8/image/upload/v1700052916/swords/beqvutvtp3ftdxbmyo26.png',
    modifiers: [['strength', 2]],
  },
  {
    name: 'Sword of Majesty',
    slot: 'weapon',
    icon: 'https://res.cloudinary.com/dxctkhax8/image/upload/v1700052912/swords/l7ncz9shtzd5wshuoc0q.png',
    modifiers: [['strength', 2]],
  },
  {
    name: 'Iron Axe',
    slot: 'weapon',
    icon: 'https://res.cloudinary.com/dxctkhax8/image/upload/v1700053507/axes/oeeo3wdeyakhqda4ussc.png',
    modifiers: [['strength', 5]],
  },
  {
    name: 'Volcanic Axe',
    slot: 'weapon',
    icon: 'https://res.cloudinary.com/dxctkhax8/image/upload/v1700053497/axes/awkgz0wwrvjewzlzwrqo.png',
    modifiers: [['strength', 7]],
  },
  {
    name: 'Sharp Axe',
    slot: 'weapon',
    icon: 'https://res.cloudinary.com/dxctkhax8/image/upload/v1700053491/axes/b49dremgltgx36xyy5kt.png',
    modifiers: [['strength', 7]],
  },

  {
    name: 'Shortbow',
    slot: 'weapon',
    icon: 'https://res.cloudinary.com/dxctkhax8/image/upload/v1700053804/bows/dwxekplg7vltzfogwzjl.png',
    modifiers: [['dexterity', 3]],
  },
  {
    name: 'Fiery Bow',
    slot: 'weapon',
    icon: 'https://res.cloudinary.com/dxctkhax8/image/upload/v1700053810/bows/djxhpklf0agghr5o8bfd.png',
    modifiers: [['dexterity', 7]],
  },
  {
    name: 'Elvish Bow',
    slot: 'weapon',
    icon: 'https://res.cloudinary.com/dxctkhax8/image/upload/v1700053810/bows/djxhpklf0agghr5o8bfd.png',
    modifiers: [['dexterity', 12]],
  },

  {
    name: 'Plate Helmet',
    slot: 'head',
    icon: 'https://res.cloudinary.com/dxctkhax8/image/upload/v1700053863/helmets/vu05m43kfkeoxwlfeakv.png',
    modifiers: [['defense', 6]],
  },
  {
    name: 'Stone Helmet',
    slot: 'head',
    icon: 'https://res.cloudinary.com/dxctkhax8/image/upload/v1700053856/helmets/zolqufvzz2ojsxkg8zfu.png',
    modifiers: [['defense', 12]],
  },
  {
    name: 'Golden Helmet',
    slot: 'head',
    icon: 'https://res.cloudinary.com/dxctkhax8/image/upload/v1700053851/helmets/c6litpqnm5zoipuorjyq.png',
    modifiers: [['defense', 15]],
  },

  {
    name: 'Leather Torso',
    slot: 'torso',
    icon: 'https://res.cloudinary.com/dxctkhax8/image/upload/v1700054009/armors/coqagrtal08oqasvwx3b.png',
    modifiers: [['defense', 7]],
  },

  {
    name: 'Golden Plate',
    slot: 'torso',
    icon: 'https://res.cloudinary.com/dxctkhax8/image/upload/v1700053984/armors/oeus7wa3qzjxzbjnskkz.png',
    modifiers: [['defense', 21]],
  },

  {
    name: 'Iron Chestplate',
    slot: 'torso',
    icon: 'https://res.cloudinary.com/dxctkhax8/image/upload/v1700053976/armors/o3bl2syyok9fhg8s0ulh.png',
    modifiers: [['defense', 14]],
  },

  {
    name: 'Leather Boots',
    slot: 'boots',
    icon: 'https://res.cloudinary.com/dxctkhax8/image/upload/v1700053762/boots/k7syldzk68ousfrb0eic.png',
    modifiers: [['defense', 3]],
  },
  {
    name: 'Hard Leather Boots',
    slot: 'boots',
    icon: 'https://res.cloudinary.com/dxctkhax8/image/upload/v1700053718/boots/nwwkdtduen54yjjei46i.png',
    modifiers: [['defense', 5]],
  },
  {
    name: 'Plate Boots',
    slot: 'boots',
    icon: 'https://res.cloudinary.com/dxctkhax8/image/upload/v1700053768/boots/df6m9hsi9y3ossmjogjl.png',
    modifiers: [['defense', 8]],
  },
  {
    name: 'Fiery Legs',
    slot: 'legs',
    icon: 'https://res.cloudinary.com/dxctkhax8/image/upload/v1700053932/pants/dwyzbdk1gycb4rvv0t9p.png',
    modifiers: [['defense', 10]],
  },
  {
    name: 'War Legs',
    slot: 'legs',
    icon: 'https://res.cloudinary.com/dxctkhax8/image/upload/v1700053926/pants/fzwtycsocl7kuzv1qic0.png',
    modifiers: [['defense', 13]],
  },
  {
    name: 'Golden Legs',
    slot: 'legs',
    icon: 'https://res.cloudinary.com/dxctkhax8/image/upload/v1700053938/pants/qrv3mmhvbzxqb7u3ivos.png',
    modifiers: [['defense', 18]],
  },
  {
    name: 'Gold Ring',
    slot: 'ring',
    icon: 'https://res.cloudinary.com/dxctkhax8/image/upload/v1700054044/rings/uynaw66fu6klkxc9ypkm.png',
    modifiers: [['fortune', 12]],
  },
  {
    name: 'Diamond Ring',
    slot: 'ring',
    icon: 'https://res.cloudinary.com/dxctkhax8/image/upload/v1700054050/rings/okek3cc99gu5vfq4rlfm.png',
    modifiers: [['fortune', 23]],
  },
  {
    name: 'Wooden Ring',
    slot: 'ring',
    icon: 'https://res.cloudinary.com/dxctkhax8/image/upload/v1700054039/rings/t8f0o7hhitagppccwvac.png',
    modifiers: [['fortune', 4]],
  },
];

export default Equipment;
