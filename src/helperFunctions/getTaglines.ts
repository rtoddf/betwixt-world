const hoodTaglines = ['A walk through ', 'A stroll through ', 'Explore '];
const residentTaglines = ['Hear ', 'Speaking with ', 'A word from '];

export function getTaglines(type: 'hood' | 'resident'): string {
  const list = type === 'hood' ? hoodTaglines : residentTaglines;
  return list[Math.floor(Math.random() * list.length)];
}
