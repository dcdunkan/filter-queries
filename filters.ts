//L3
const ENTITY_KEYS = {
  mention: {},
  hashtag: {},
  cashtag: {},
  bot_command: {},
  url: {},
  email: {},
  phone_number: {},
  bold: {},
  italic: {},
  underline: {},
  strikethrough: {},
  spoiler: {},
  code: {},
  pre: {},
  text_link: {},
  text_mention: {},
} as const;
const USER_KEYS = {
  me: {},
  is_bot: {},
  is_premium: {},
  added_to_attachment_menu: {},
} as const;

// L2
const EDITABLE_MESSAGE_KEYS = {
  text: {},
  animation: {},
  audio: {},
  document: {},
  photo: {},
  video: {},
  game: {},
  location: {},

  entities: ENTITY_KEYS,
  caption_entities: ENTITY_KEYS,

  caption: {},
} as const;
const COMMON_MESSAGE_KEYS = {
  ...EDITABLE_MESSAGE_KEYS,

  sticker: {},
  video_note: {},
  voice: {},
  contact: {},
  dice: {},
  poll: {},
  venue: {},

  new_chat_title: {},
  new_chat_photo: {},
  delete_chat_photo: {},
  message_auto_delete_timer_changed: {},
  pinned_message: {},
  invoice: {},
  proximity_alert_triggered: {},
  video_chat_scheduled: {},
  video_chat_started: {},
  video_chat_ended: {},
  video_chat_participants_invited: {},
  web_app_data: {},

  forward_date: {},
  is_automatic_forward: {},
} as const;
const MESSAGE_KEYS = {
  ...COMMON_MESSAGE_KEYS,
  new_chat_members: USER_KEYS,
  left_chat_member: USER_KEYS,
  group_chat_created: {},
  supergroup_chat_created: {},
  migrate_to_chat_id: {},
  migrate_from_chat_id: {},
  successful_payment: {},
  connected_website: {},
  passport_data: {},
} as const;
const CHANNEL_POST_KEYS = {
  ...COMMON_MESSAGE_KEYS,
  channel_chat_created: {},
} as const;
const CALLBACK_QUERY_KEYS = { data: {}, game_short_name: {} } as const;
const CHAT_MEMBER_UPDATED_KEYS = { from: USER_KEYS } as const;

// L1
const UPDATE_KEYS = {
  message: MESSAGE_KEYS,
  edited_message: MESSAGE_KEYS,
  channel_post: CHANNEL_POST_KEYS,
  edited_channel_post: CHANNEL_POST_KEYS,
  inline_query: {},
  chosen_inline_result: {},
  callback_query: CALLBACK_QUERY_KEYS,
  shipping_query: {},
  pre_checkout_query: {},
  poll: {},
  poll_answer: {},
  my_chat_member: CHAT_MEMBER_UPDATED_KEYS,
  chat_member: CHAT_MEMBER_UPDATED_KEYS,
  chat_join_request: {},
} as const;

const L1_SHORTCUTS: Record<string, string[]> = {
  "": ["message", "channel_post"],
  msg: ["message", "channel_post"],
  edit: ["edited_message", "edited_channel_post"],
};
const L2_SHORTCUTS: Record<string, string[]> = {
  "": ["entities", "caption_entities"],
  media: ["photo", "video"],
  file: [
    "photo",
    "animation",
    "audio",
    "document",
    "video",
    "video_note",
    "voice",
    "sticker",
  ],
};

export { L1_SHORTCUTS, L2_SHORTCUTS, UPDATE_KEYS };
