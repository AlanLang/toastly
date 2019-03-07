export interface NotificationProps {
  /**
   * 最大可显示条数
   */
  maxCount?: number;
  /**
   * 默认关闭时间
   */
  duration?: number;
  /**
   * 位置
   */
  placement?:'topLeft'|'topRight'|'topCenter'|'bottomLeft'|'bottomRight'|'bottomCenter';
}