export interface NotificationProps { 
  maxCount?: number;// 最大可现实数量
  duration?: number;// 默认关闭时间
  placement?:'topLeft'|'topRight'|'topBottom'|'topCenter'|'bottomLeft'|'bottomRight'|'bottomBottom'|'bottomCenter';
  onClose?: (event: any) => void;
  description?: string | React.ReactNode; //内容
}