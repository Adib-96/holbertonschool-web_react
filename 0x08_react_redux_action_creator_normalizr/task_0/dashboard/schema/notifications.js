import * as notifications from '../../../notifications.json';

export function getAllNotificationsByUser(userId) {
    return notifications
        .filter((notification) => userId === notification.author.id)
        .map((notification) => notification.context);
}
