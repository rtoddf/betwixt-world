export const TODAY = new Date().toISOString().split('T')[0];
export const TWO_WEEKS_OUT = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000)
  .toISOString()
  .split('T')[0];

export const prioritizeResidents = function (date: string, isPreview: boolean) {
  if (isPreview || (!!date && date <= TODAY)) {
    return 0;
  } else if (!!date && date <= TWO_WEEKS_OUT) {
    return 1;
  } else {
    return 2;
  }
};
