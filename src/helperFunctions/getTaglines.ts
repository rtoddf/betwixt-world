const characterTaglines: Record<string, string> = {
  Sphen: 'Sphen plots',
};

const hoodTaglines = ['A walk through ', 'A stroll through ', 'Explore '];
const residentTaglines = ['Hear ', 'Speaking with ', 'A word from '];

export function getTaglines(type: 'hood' | 'resident', name?: string): string {
  if (name && characterTaglines[name]) {
    return characterTaglines[name];
  }
  const list = type === 'hood' ? hoodTaglines : residentTaglines;
  const tagline = list[Math.floor(Math.random() * list.length)];
  return name ? `${tagline}${name}` : tagline;
}
