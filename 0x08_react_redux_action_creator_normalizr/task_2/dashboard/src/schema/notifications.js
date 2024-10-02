import * as notifications from '../../../notifications.json';
import { normalize, schema } from 'normalizr';

// Define a user's schema
const user = new schema.Entity('users');
// Define a message's schema
const message = new schema.Entity('messages', {}, {idAttribute: 'guid'});
// Build a notification's schema

const notification_ = new schema.Entity('notifications',{
    author: user,
    context: message
});
// define a schema as an array of the notification schema
const mySchema = [notification_];
// export the normalized data
export const normalizedData = normalize(notifications.default, mySchema);


export function getAllNotificationsByUser(userId) {
    const result = [];
    // overriding the imported definition for notifications locally here.
    const notifications = normalizedData.entities.notifications;
    const messages = normalizedData.entities.messages;
    for (const notifId in notifications) {
        if (notifications[ notifId ].author === userId) {
            const contextId = notifications[ notifId ].context;
            result.push(messages[ contextId ]);
        }
    }
    return result;
}