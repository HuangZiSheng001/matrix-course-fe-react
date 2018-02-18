export interface IPaginationArgs {
  current: number;
  pageSize: number;
}

export interface INotificationsResult {
  notifications: object[];
  total_num: number;
  unread_num: number;
}
