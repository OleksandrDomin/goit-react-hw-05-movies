import format from 'date-fns/format';

export const formatDateToYear = date => {
  if (date) {
    return format(new Date(date), 'yyyy');
  }
};
