export interface NotificationProps {
  /**
   * 最大可显示条数
   */
  maxCount?: number;
  /**
   * 默认关闭事件
   */
  duration?: number;
  /**
   * 位置
   */
  placement?:'topLeft'|'topRight'|'topBottom'|'topCenter'|'bottomLeft'|'bottomRight'|'bottomBottom'|'bottomCenter';
}