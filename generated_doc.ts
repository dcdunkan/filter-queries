/** All valid filter queries of grammY */
export const FQ = {
  /** `ctx.message` */
  "message": "message",
  /** `ctx.message.text` */
  ":text": ":text",
  /** `ctx.message.animation` */
  ":animation": ":animation",
  /** `ctx.message.file` */
  ":file": ":file",
  /** `ctx.message.audio` */
  ":audio": ":audio",
  /** `ctx.message.document` */
  ":document": ":document",
  /** `ctx.message.photo` */
  ":photo": ":photo",
  /** `ctx.message.media` */
  ":media": ":media",
  /** `ctx.message.video` */
  ":video": ":video",
  /** `ctx.message.game` */
  ":game": ":game",
  /** `ctx.message.location` */
  ":location": ":location",
  /** `ctx.message.entities` */
  ":entities": ":entities",
  /** `ctx.message.entities.mention` */
  "::mention": "::mention",
  /** `ctx.message.entities.hashtag` */
  "::hashtag": "::hashtag",
  /** `ctx.message.entities.cashtag` */
  "::cashtag": "::cashtag",
  /** `ctx.message.entities.bot_command` */
  "::bot_command": "::bot_command",
  /** `ctx.message.entities.url` */
  "::url": "::url",
  /** `ctx.message.entities.email` */
  "::email": "::email",
  /** `ctx.message.entities.phone_number` */
  "::phone_number": "::phone_number",
  /** `ctx.message.entities.bold` */
  "::bold": "::bold",
  /** `ctx.message.entities.italic` */
  "::italic": "::italic",
  /** `ctx.message.entities.underline` */
  "::underline": "::underline",
  /** `ctx.message.entities.strikethrough` */
  "::strikethrough": "::strikethrough",
  /** `ctx.message.entities.spoiler` */
  "::spoiler": "::spoiler",
  /** `ctx.message.entities.code` */
  "::code": "::code",
  /** `ctx.message.entities.pre` */
  "::pre": "::pre",
  /** `ctx.message.entities.text_link` */
  "::text_link": "::text_link",
  /** `ctx.message.entities.text_mention` */
  "::text_mention": "::text_mention",
  /** `ctx.message.entities.mention` */
  ":entities:mention": ":entities:mention",
  /** `ctx.message.entities.hashtag` */
  ":entities:hashtag": ":entities:hashtag",
  /** `ctx.message.entities.cashtag` */
  ":entities:cashtag": ":entities:cashtag",
  /** `ctx.message.entities.bot_command` */
  ":entities:bot_command": ":entities:bot_command",
  /** `ctx.message.entities.url` */
  ":entities:url": ":entities:url",
  /** `ctx.message.entities.email` */
  ":entities:email": ":entities:email",
  /** `ctx.message.entities.phone_number` */
  ":entities:phone_number": ":entities:phone_number",
  /** `ctx.message.entities.bold` */
  ":entities:bold": ":entities:bold",
  /** `ctx.message.entities.italic` */
  ":entities:italic": ":entities:italic",
  /** `ctx.message.entities.underline` */
  ":entities:underline": ":entities:underline",
  /** `ctx.message.entities.strikethrough` */
  ":entities:strikethrough": ":entities:strikethrough",
  /** `ctx.message.entities.spoiler` */
  ":entities:spoiler": ":entities:spoiler",
  /** `ctx.message.entities.code` */
  ":entities:code": ":entities:code",
  /** `ctx.message.entities.pre` */
  ":entities:pre": ":entities:pre",
  /** `ctx.message.entities.text_link` */
  ":entities:text_link": ":entities:text_link",
  /** `ctx.message.entities.text_mention` */
  ":entities:text_mention": ":entities:text_mention",
  /** `ctx.message.caption_entities` */
  ":caption_entities": ":caption_entities",
  /** `ctx.message.caption_entities.mention` */
  ":caption_entities:mention": ":caption_entities:mention",
  /** `ctx.message.caption_entities.hashtag` */
  ":caption_entities:hashtag": ":caption_entities:hashtag",
  /** `ctx.message.caption_entities.cashtag` */
  ":caption_entities:cashtag": ":caption_entities:cashtag",
  /** `ctx.message.caption_entities.bot_command` */
  ":caption_entities:bot_command": ":caption_entities:bot_command",
  /** `ctx.message.caption_entities.url` */
  ":caption_entities:url": ":caption_entities:url",
  /** `ctx.message.caption_entities.email` */
  ":caption_entities:email": ":caption_entities:email",
  /** `ctx.message.caption_entities.phone_number` */
  ":caption_entities:phone_number": ":caption_entities:phone_number",
  /** `ctx.message.caption_entities.bold` */
  ":caption_entities:bold": ":caption_entities:bold",
  /** `ctx.message.caption_entities.italic` */
  ":caption_entities:italic": ":caption_entities:italic",
  /** `ctx.message.caption_entities.underline` */
  ":caption_entities:underline": ":caption_entities:underline",
  /** `ctx.message.caption_entities.strikethrough` */
  ":caption_entities:strikethrough": ":caption_entities:strikethrough",
  /** `ctx.message.caption_entities.spoiler` */
  ":caption_entities:spoiler": ":caption_entities:spoiler",
  /** `ctx.message.caption_entities.code` */
  ":caption_entities:code": ":caption_entities:code",
  /** `ctx.message.caption_entities.pre` */
  ":caption_entities:pre": ":caption_entities:pre",
  /** `ctx.message.caption_entities.text_link` */
  ":caption_entities:text_link": ":caption_entities:text_link",
  /** `ctx.message.caption_entities.text_mention` */
  ":caption_entities:text_mention": ":caption_entities:text_mention",
  /** `ctx.message.caption` */
  ":caption": ":caption",
  /** `ctx.message.sticker` */
  ":sticker": ":sticker",
  /** `ctx.message.video_note` */
  ":video_note": ":video_note",
  /** `ctx.message.voice` */
  ":voice": ":voice",
  /** `ctx.message.contact` */
  ":contact": ":contact",
  /** `ctx.message.dice` */
  ":dice": ":dice",
  /** `ctx.message.poll` */
  ":poll": ":poll",
  /** `ctx.message.venue` */
  ":venue": ":venue",
  /** `ctx.message.new_chat_title` */
  ":new_chat_title": ":new_chat_title",
  /** `ctx.message.new_chat_photo` */
  ":new_chat_photo": ":new_chat_photo",
  /** `ctx.message.delete_chat_photo` */
  ":delete_chat_photo": ":delete_chat_photo",
  /** `ctx.message.message_auto_delete_timer_changed` */
  ":message_auto_delete_timer_changed": ":message_auto_delete_timer_changed",
  /** `ctx.message.pinned_message` */
  ":pinned_message": ":pinned_message",
  /** `ctx.message.invoice` */
  ":invoice": ":invoice",
  /** `ctx.message.proximity_alert_triggered` */
  ":proximity_alert_triggered": ":proximity_alert_triggered",
  /** `ctx.message.video_chat_scheduled` */
  ":video_chat_scheduled": ":video_chat_scheduled",
  /** `ctx.message.video_chat_started` */
  ":video_chat_started": ":video_chat_started",
  /** `ctx.message.video_chat_ended` */
  ":video_chat_ended": ":video_chat_ended",
  /** `ctx.message.video_chat_participants_invited` */
  ":video_chat_participants_invited": ":video_chat_participants_invited",
  /** `ctx.message.web_app_data` */
  ":web_app_data": ":web_app_data",
  /** `ctx.message.forward_date` */
  ":forward_date": ":forward_date",
  /** `ctx.message.is_automatic_forward` */
  ":is_automatic_forward": ":is_automatic_forward",
  /** `ctx.message.new_chat_members` */
  ":new_chat_members": ":new_chat_members",
  /** `ctx.message.new_chat_members.me` */
  ":new_chat_members:me": ":new_chat_members:me",
  /** `ctx.message.new_chat_members.is_bot` */
  ":new_chat_members:is_bot": ":new_chat_members:is_bot",
  /** `ctx.message.new_chat_members.is_premium` */
  ":new_chat_members:is_premium": ":new_chat_members:is_premium",
  /** `ctx.message.new_chat_members.added_to_attachment_menu` */
  ":new_chat_members:added_to_attachment_menu": ":new_chat_members:added_to_attachment_menu",
  /** `ctx.message.left_chat_member` */
  ":left_chat_member": ":left_chat_member",
  /** `ctx.message.left_chat_member.me` */
  ":left_chat_member:me": ":left_chat_member:me",
  /** `ctx.message.left_chat_member.is_bot` */
  ":left_chat_member:is_bot": ":left_chat_member:is_bot",
  /** `ctx.message.left_chat_member.is_premium` */
  ":left_chat_member:is_premium": ":left_chat_member:is_premium",
  /** `ctx.message.left_chat_member.added_to_attachment_menu` */
  ":left_chat_member:added_to_attachment_menu": ":left_chat_member:added_to_attachment_menu",
  /** `ctx.message.group_chat_created` */
  ":group_chat_created": ":group_chat_created",
  /** `ctx.message.supergroup_chat_created` */
  ":supergroup_chat_created": ":supergroup_chat_created",
  /** `ctx.message.migrate_to_chat_id` */
  ":migrate_to_chat_id": ":migrate_to_chat_id",
  /** `ctx.message.migrate_from_chat_id` */
  ":migrate_from_chat_id": ":migrate_from_chat_id",
  /** `ctx.message.successful_payment` */
  ":successful_payment": ":successful_payment",
  /** `ctx.message.connected_website` */
  ":connected_website": ":connected_website",
  /** `ctx.message.passport_data` */
  ":passport_data": ":passport_data",
  /** `ctx.msg.text` */
  "msg:text": "msg:text",
  /** `ctx.msg.animation` */
  "msg:animation": "msg:animation",
  /** `ctx.msg.file` */
  "msg:file": "msg:file",
  /** `ctx.msg.audio` */
  "msg:audio": "msg:audio",
  /** `ctx.msg.document` */
  "msg:document": "msg:document",
  /** `ctx.msg.photo` */
  "msg:photo": "msg:photo",
  /** `ctx.msg.media` */
  "msg:media": "msg:media",
  /** `ctx.msg.video` */
  "msg:video": "msg:video",
  /** `ctx.msg.game` */
  "msg:game": "msg:game",
  /** `ctx.msg.location` */
  "msg:location": "msg:location",
  /** `ctx.msg.entities` */
  "msg:entities": "msg:entities",
  /** `ctx.msg.entities.mention` */
  "msg::mention": "msg::mention",
  /** `ctx.msg.entities.hashtag` */
  "msg::hashtag": "msg::hashtag",
  /** `ctx.msg.entities.cashtag` */
  "msg::cashtag": "msg::cashtag",
  /** `ctx.msg.entities.bot_command` */
  "msg::bot_command": "msg::bot_command",
  /** `ctx.msg.entities.url` */
  "msg::url": "msg::url",
  /** `ctx.msg.entities.email` */
  "msg::email": "msg::email",
  /** `ctx.msg.entities.phone_number` */
  "msg::phone_number": "msg::phone_number",
  /** `ctx.msg.entities.bold` */
  "msg::bold": "msg::bold",
  /** `ctx.msg.entities.italic` */
  "msg::italic": "msg::italic",
  /** `ctx.msg.entities.underline` */
  "msg::underline": "msg::underline",
  /** `ctx.msg.entities.strikethrough` */
  "msg::strikethrough": "msg::strikethrough",
  /** `ctx.msg.entities.spoiler` */
  "msg::spoiler": "msg::spoiler",
  /** `ctx.msg.entities.code` */
  "msg::code": "msg::code",
  /** `ctx.msg.entities.pre` */
  "msg::pre": "msg::pre",
  /** `ctx.msg.entities.text_link` */
  "msg::text_link": "msg::text_link",
  /** `ctx.msg.entities.text_mention` */
  "msg::text_mention": "msg::text_mention",
  /** `ctx.msg.entities.mention` */
  "msg:entities:mention": "msg:entities:mention",
  /** `ctx.msg.entities.hashtag` */
  "msg:entities:hashtag": "msg:entities:hashtag",
  /** `ctx.msg.entities.cashtag` */
  "msg:entities:cashtag": "msg:entities:cashtag",
  /** `ctx.msg.entities.bot_command` */
  "msg:entities:bot_command": "msg:entities:bot_command",
  /** `ctx.msg.entities.url` */
  "msg:entities:url": "msg:entities:url",
  /** `ctx.msg.entities.email` */
  "msg:entities:email": "msg:entities:email",
  /** `ctx.msg.entities.phone_number` */
  "msg:entities:phone_number": "msg:entities:phone_number",
  /** `ctx.msg.entities.bold` */
  "msg:entities:bold": "msg:entities:bold",
  /** `ctx.msg.entities.italic` */
  "msg:entities:italic": "msg:entities:italic",
  /** `ctx.msg.entities.underline` */
  "msg:entities:underline": "msg:entities:underline",
  /** `ctx.msg.entities.strikethrough` */
  "msg:entities:strikethrough": "msg:entities:strikethrough",
  /** `ctx.msg.entities.spoiler` */
  "msg:entities:spoiler": "msg:entities:spoiler",
  /** `ctx.msg.entities.code` */
  "msg:entities:code": "msg:entities:code",
  /** `ctx.msg.entities.pre` */
  "msg:entities:pre": "msg:entities:pre",
  /** `ctx.msg.entities.text_link` */
  "msg:entities:text_link": "msg:entities:text_link",
  /** `ctx.msg.entities.text_mention` */
  "msg:entities:text_mention": "msg:entities:text_mention",
  /** `ctx.msg.caption_entities` */
  "msg:caption_entities": "msg:caption_entities",
  /** `ctx.msg.caption_entities.mention` */
  "msg:caption_entities:mention": "msg:caption_entities:mention",
  /** `ctx.msg.caption_entities.hashtag` */
  "msg:caption_entities:hashtag": "msg:caption_entities:hashtag",
  /** `ctx.msg.caption_entities.cashtag` */
  "msg:caption_entities:cashtag": "msg:caption_entities:cashtag",
  /** `ctx.msg.caption_entities.bot_command` */
  "msg:caption_entities:bot_command": "msg:caption_entities:bot_command",
  /** `ctx.msg.caption_entities.url` */
  "msg:caption_entities:url": "msg:caption_entities:url",
  /** `ctx.msg.caption_entities.email` */
  "msg:caption_entities:email": "msg:caption_entities:email",
  /** `ctx.msg.caption_entities.phone_number` */
  "msg:caption_entities:phone_number": "msg:caption_entities:phone_number",
  /** `ctx.msg.caption_entities.bold` */
  "msg:caption_entities:bold": "msg:caption_entities:bold",
  /** `ctx.msg.caption_entities.italic` */
  "msg:caption_entities:italic": "msg:caption_entities:italic",
  /** `ctx.msg.caption_entities.underline` */
  "msg:caption_entities:underline": "msg:caption_entities:underline",
  /** `ctx.msg.caption_entities.strikethrough` */
  "msg:caption_entities:strikethrough": "msg:caption_entities:strikethrough",
  /** `ctx.msg.caption_entities.spoiler` */
  "msg:caption_entities:spoiler": "msg:caption_entities:spoiler",
  /** `ctx.msg.caption_entities.code` */
  "msg:caption_entities:code": "msg:caption_entities:code",
  /** `ctx.msg.caption_entities.pre` */
  "msg:caption_entities:pre": "msg:caption_entities:pre",
  /** `ctx.msg.caption_entities.text_link` */
  "msg:caption_entities:text_link": "msg:caption_entities:text_link",
  /** `ctx.msg.caption_entities.text_mention` */
  "msg:caption_entities:text_mention": "msg:caption_entities:text_mention",
  /** `ctx.msg.caption` */
  "msg:caption": "msg:caption",
  /** `ctx.msg.sticker` */
  "msg:sticker": "msg:sticker",
  /** `ctx.msg.video_note` */
  "msg:video_note": "msg:video_note",
  /** `ctx.msg.voice` */
  "msg:voice": "msg:voice",
  /** `ctx.msg.contact` */
  "msg:contact": "msg:contact",
  /** `ctx.msg.dice` */
  "msg:dice": "msg:dice",
  /** `ctx.msg.poll` */
  "msg:poll": "msg:poll",
  /** `ctx.msg.venue` */
  "msg:venue": "msg:venue",
  /** `ctx.msg.new_chat_title` */
  "msg:new_chat_title": "msg:new_chat_title",
  /** `ctx.msg.new_chat_photo` */
  "msg:new_chat_photo": "msg:new_chat_photo",
  /** `ctx.msg.delete_chat_photo` */
  "msg:delete_chat_photo": "msg:delete_chat_photo",
  /** `ctx.msg.message_auto_delete_timer_changed` */
  "msg:message_auto_delete_timer_changed": "msg:message_auto_delete_timer_changed",
  /** `ctx.msg.pinned_message` */
  "msg:pinned_message": "msg:pinned_message",
  /** `ctx.msg.invoice` */
  "msg:invoice": "msg:invoice",
  /** `ctx.msg.proximity_alert_triggered` */
  "msg:proximity_alert_triggered": "msg:proximity_alert_triggered",
  /** `ctx.msg.video_chat_scheduled` */
  "msg:video_chat_scheduled": "msg:video_chat_scheduled",
  /** `ctx.msg.video_chat_started` */
  "msg:video_chat_started": "msg:video_chat_started",
  /** `ctx.msg.video_chat_ended` */
  "msg:video_chat_ended": "msg:video_chat_ended",
  /** `ctx.msg.video_chat_participants_invited` */
  "msg:video_chat_participants_invited": "msg:video_chat_participants_invited",
  /** `ctx.msg.web_app_data` */
  "msg:web_app_data": "msg:web_app_data",
  /** `ctx.msg.forward_date` */
  "msg:forward_date": "msg:forward_date",
  /** `ctx.msg.is_automatic_forward` */
  "msg:is_automatic_forward": "msg:is_automatic_forward",
  /** `ctx.msg.new_chat_members` */
  "msg:new_chat_members": "msg:new_chat_members",
  /** `ctx.msg.new_chat_members.me` */
  "msg:new_chat_members:me": "msg:new_chat_members:me",
  /** `ctx.msg.new_chat_members.is_bot` */
  "msg:new_chat_members:is_bot": "msg:new_chat_members:is_bot",
  /** `ctx.msg.new_chat_members.is_premium` */
  "msg:new_chat_members:is_premium": "msg:new_chat_members:is_premium",
  /** `ctx.msg.new_chat_members.added_to_attachment_menu` */
  "msg:new_chat_members:added_to_attachment_menu": "msg:new_chat_members:added_to_attachment_menu",
  /** `ctx.msg.left_chat_member` */
  "msg:left_chat_member": "msg:left_chat_member",
  /** `ctx.msg.left_chat_member.me` */
  "msg:left_chat_member:me": "msg:left_chat_member:me",
  /** `ctx.msg.left_chat_member.is_bot` */
  "msg:left_chat_member:is_bot": "msg:left_chat_member:is_bot",
  /** `ctx.msg.left_chat_member.is_premium` */
  "msg:left_chat_member:is_premium": "msg:left_chat_member:is_premium",
  /** `ctx.msg.left_chat_member.added_to_attachment_menu` */
  "msg:left_chat_member:added_to_attachment_menu": "msg:left_chat_member:added_to_attachment_menu",
  /** `ctx.msg.group_chat_created` */
  "msg:group_chat_created": "msg:group_chat_created",
  /** `ctx.msg.supergroup_chat_created` */
  "msg:supergroup_chat_created": "msg:supergroup_chat_created",
  /** `ctx.msg.migrate_to_chat_id` */
  "msg:migrate_to_chat_id": "msg:migrate_to_chat_id",
  /** `ctx.msg.migrate_from_chat_id` */
  "msg:migrate_from_chat_id": "msg:migrate_from_chat_id",
  /** `ctx.msg.successful_payment` */
  "msg:successful_payment": "msg:successful_payment",
  /** `ctx.msg.connected_website` */
  "msg:connected_website": "msg:connected_website",
  /** `ctx.msg.passport_data` */
  "msg:passport_data": "msg:passport_data",
  /** `ctx.message.text` */
  "message:text": "message:text",
  /** `ctx.message.animation` */
  "message:animation": "message:animation",
  /** `ctx.message.file` */
  "message:file": "message:file",
  /** `ctx.message.audio` */
  "message:audio": "message:audio",
  /** `ctx.message.document` */
  "message:document": "message:document",
  /** `ctx.message.photo` */
  "message:photo": "message:photo",
  /** `ctx.message.media` */
  "message:media": "message:media",
  /** `ctx.message.video` */
  "message:video": "message:video",
  /** `ctx.message.game` */
  "message:game": "message:game",
  /** `ctx.message.location` */
  "message:location": "message:location",
  /** `ctx.message.entities` */
  "message:entities": "message:entities",
  /** `ctx.message.entities.mention` */
  "message::mention": "message::mention",
  /** `ctx.message.entities.hashtag` */
  "message::hashtag": "message::hashtag",
  /** `ctx.message.entities.cashtag` */
  "message::cashtag": "message::cashtag",
  /** `ctx.message.entities.bot_command` */
  "message::bot_command": "message::bot_command",
  /** `ctx.message.entities.url` */
  "message::url": "message::url",
  /** `ctx.message.entities.email` */
  "message::email": "message::email",
  /** `ctx.message.entities.phone_number` */
  "message::phone_number": "message::phone_number",
  /** `ctx.message.entities.bold` */
  "message::bold": "message::bold",
  /** `ctx.message.entities.italic` */
  "message::italic": "message::italic",
  /** `ctx.message.entities.underline` */
  "message::underline": "message::underline",
  /** `ctx.message.entities.strikethrough` */
  "message::strikethrough": "message::strikethrough",
  /** `ctx.message.entities.spoiler` */
  "message::spoiler": "message::spoiler",
  /** `ctx.message.entities.code` */
  "message::code": "message::code",
  /** `ctx.message.entities.pre` */
  "message::pre": "message::pre",
  /** `ctx.message.entities.text_link` */
  "message::text_link": "message::text_link",
  /** `ctx.message.entities.text_mention` */
  "message::text_mention": "message::text_mention",
  /** `ctx.message.entities.mention` */
  "message:entities:mention": "message:entities:mention",
  /** `ctx.message.entities.hashtag` */
  "message:entities:hashtag": "message:entities:hashtag",
  /** `ctx.message.entities.cashtag` */
  "message:entities:cashtag": "message:entities:cashtag",
  /** `ctx.message.entities.bot_command` */
  "message:entities:bot_command": "message:entities:bot_command",
  /** `ctx.message.entities.url` */
  "message:entities:url": "message:entities:url",
  /** `ctx.message.entities.email` */
  "message:entities:email": "message:entities:email",
  /** `ctx.message.entities.phone_number` */
  "message:entities:phone_number": "message:entities:phone_number",
  /** `ctx.message.entities.bold` */
  "message:entities:bold": "message:entities:bold",
  /** `ctx.message.entities.italic` */
  "message:entities:italic": "message:entities:italic",
  /** `ctx.message.entities.underline` */
  "message:entities:underline": "message:entities:underline",
  /** `ctx.message.entities.strikethrough` */
  "message:entities:strikethrough": "message:entities:strikethrough",
  /** `ctx.message.entities.spoiler` */
  "message:entities:spoiler": "message:entities:spoiler",
  /** `ctx.message.entities.code` */
  "message:entities:code": "message:entities:code",
  /** `ctx.message.entities.pre` */
  "message:entities:pre": "message:entities:pre",
  /** `ctx.message.entities.text_link` */
  "message:entities:text_link": "message:entities:text_link",
  /** `ctx.message.entities.text_mention` */
  "message:entities:text_mention": "message:entities:text_mention",
  /** `ctx.message.caption_entities` */
  "message:caption_entities": "message:caption_entities",
  /** `ctx.message.caption_entities.mention` */
  "message:caption_entities:mention": "message:caption_entities:mention",
  /** `ctx.message.caption_entities.hashtag` */
  "message:caption_entities:hashtag": "message:caption_entities:hashtag",
  /** `ctx.message.caption_entities.cashtag` */
  "message:caption_entities:cashtag": "message:caption_entities:cashtag",
  /** `ctx.message.caption_entities.bot_command` */
  "message:caption_entities:bot_command": "message:caption_entities:bot_command",
  /** `ctx.message.caption_entities.url` */
  "message:caption_entities:url": "message:caption_entities:url",
  /** `ctx.message.caption_entities.email` */
  "message:caption_entities:email": "message:caption_entities:email",
  /** `ctx.message.caption_entities.phone_number` */
  "message:caption_entities:phone_number": "message:caption_entities:phone_number",
  /** `ctx.message.caption_entities.bold` */
  "message:caption_entities:bold": "message:caption_entities:bold",
  /** `ctx.message.caption_entities.italic` */
  "message:caption_entities:italic": "message:caption_entities:italic",
  /** `ctx.message.caption_entities.underline` */
  "message:caption_entities:underline": "message:caption_entities:underline",
  /** `ctx.message.caption_entities.strikethrough` */
  "message:caption_entities:strikethrough": "message:caption_entities:strikethrough",
  /** `ctx.message.caption_entities.spoiler` */
  "message:caption_entities:spoiler": "message:caption_entities:spoiler",
  /** `ctx.message.caption_entities.code` */
  "message:caption_entities:code": "message:caption_entities:code",
  /** `ctx.message.caption_entities.pre` */
  "message:caption_entities:pre": "message:caption_entities:pre",
  /** `ctx.message.caption_entities.text_link` */
  "message:caption_entities:text_link": "message:caption_entities:text_link",
  /** `ctx.message.caption_entities.text_mention` */
  "message:caption_entities:text_mention": "message:caption_entities:text_mention",
  /** `ctx.message.caption` */
  "message:caption": "message:caption",
  /** `ctx.message.sticker` */
  "message:sticker": "message:sticker",
  /** `ctx.message.video_note` */
  "message:video_note": "message:video_note",
  /** `ctx.message.voice` */
  "message:voice": "message:voice",
  /** `ctx.message.contact` */
  "message:contact": "message:contact",
  /** `ctx.message.dice` */
  "message:dice": "message:dice",
  /** `ctx.message.poll` */
  "message:poll": "message:poll",
  /** `ctx.message.venue` */
  "message:venue": "message:venue",
  /** `ctx.message.new_chat_title` */
  "message:new_chat_title": "message:new_chat_title",
  /** `ctx.message.new_chat_photo` */
  "message:new_chat_photo": "message:new_chat_photo",
  /** `ctx.message.delete_chat_photo` */
  "message:delete_chat_photo": "message:delete_chat_photo",
  /** `ctx.message.message_auto_delete_timer_changed` */
  "message:message_auto_delete_timer_changed": "message:message_auto_delete_timer_changed",
  /** `ctx.message.pinned_message` */
  "message:pinned_message": "message:pinned_message",
  /** `ctx.message.invoice` */
  "message:invoice": "message:invoice",
  /** `ctx.message.proximity_alert_triggered` */
  "message:proximity_alert_triggered": "message:proximity_alert_triggered",
  /** `ctx.message.video_chat_scheduled` */
  "message:video_chat_scheduled": "message:video_chat_scheduled",
  /** `ctx.message.video_chat_started` */
  "message:video_chat_started": "message:video_chat_started",
  /** `ctx.message.video_chat_ended` */
  "message:video_chat_ended": "message:video_chat_ended",
  /** `ctx.message.video_chat_participants_invited` */
  "message:video_chat_participants_invited": "message:video_chat_participants_invited",
  /** `ctx.message.web_app_data` */
  "message:web_app_data": "message:web_app_data",
  /** `ctx.message.forward_date` */
  "message:forward_date": "message:forward_date",
  /** `ctx.message.is_automatic_forward` */
  "message:is_automatic_forward": "message:is_automatic_forward",
  /** `ctx.message.new_chat_members` */
  "message:new_chat_members": "message:new_chat_members",
  /** `ctx.message.new_chat_members.me` */
  "message:new_chat_members:me": "message:new_chat_members:me",
  /** `ctx.message.new_chat_members.is_bot` */
  "message:new_chat_members:is_bot": "message:new_chat_members:is_bot",
  /** `ctx.message.new_chat_members.is_premium` */
  "message:new_chat_members:is_premium": "message:new_chat_members:is_premium",
  /** `ctx.message.new_chat_members.added_to_attachment_menu` */
  "message:new_chat_members:added_to_attachment_menu": "message:new_chat_members:added_to_attachment_menu",
  /** `ctx.message.left_chat_member` */
  "message:left_chat_member": "message:left_chat_member",
  /** `ctx.message.left_chat_member.me` */
  "message:left_chat_member:me": "message:left_chat_member:me",
  /** `ctx.message.left_chat_member.is_bot` */
  "message:left_chat_member:is_bot": "message:left_chat_member:is_bot",
  /** `ctx.message.left_chat_member.is_premium` */
  "message:left_chat_member:is_premium": "message:left_chat_member:is_premium",
  /** `ctx.message.left_chat_member.added_to_attachment_menu` */
  "message:left_chat_member:added_to_attachment_menu": "message:left_chat_member:added_to_attachment_menu",
  /** `ctx.message.group_chat_created` */
  "message:group_chat_created": "message:group_chat_created",
  /** `ctx.message.supergroup_chat_created` */
  "message:supergroup_chat_created": "message:supergroup_chat_created",
  /** `ctx.message.migrate_to_chat_id` */
  "message:migrate_to_chat_id": "message:migrate_to_chat_id",
  /** `ctx.message.migrate_from_chat_id` */
  "message:migrate_from_chat_id": "message:migrate_from_chat_id",
  /** `ctx.message.successful_payment` */
  "message:successful_payment": "message:successful_payment",
  /** `ctx.message.connected_website` */
  "message:connected_website": "message:connected_website",
  /** `ctx.message.passport_data` */
  "message:passport_data": "message:passport_data",
  /** `ctx.editedMessage` */
  "edited_message": "edited_message",
  /** `ctx.editedMessage.text` */
  "edit:text": "edit:text",
  /** `ctx.editedMessage.animation` */
  "edit:animation": "edit:animation",
  /** `ctx.editedMessage.file` */
  "edit:file": "edit:file",
  /** `ctx.editedMessage.audio` */
  "edit:audio": "edit:audio",
  /** `ctx.editedMessage.document` */
  "edit:document": "edit:document",
  /** `ctx.editedMessage.photo` */
  "edit:photo": "edit:photo",
  /** `ctx.editedMessage.media` */
  "edit:media": "edit:media",
  /** `ctx.editedMessage.video` */
  "edit:video": "edit:video",
  /** `ctx.editedMessage.game` */
  "edit:game": "edit:game",
  /** `ctx.editedMessage.location` */
  "edit:location": "edit:location",
  /** `ctx.editedMessage.entities` */
  "edit:entities": "edit:entities",
  /** `ctx.editedMessage.entities.mention` */
  "edit::mention": "edit::mention",
  /** `ctx.editedMessage.entities.hashtag` */
  "edit::hashtag": "edit::hashtag",
  /** `ctx.editedMessage.entities.cashtag` */
  "edit::cashtag": "edit::cashtag",
  /** `ctx.editedMessage.entities.bot_command` */
  "edit::bot_command": "edit::bot_command",
  /** `ctx.editedMessage.entities.url` */
  "edit::url": "edit::url",
  /** `ctx.editedMessage.entities.email` */
  "edit::email": "edit::email",
  /** `ctx.editedMessage.entities.phone_number` */
  "edit::phone_number": "edit::phone_number",
  /** `ctx.editedMessage.entities.bold` */
  "edit::bold": "edit::bold",
  /** `ctx.editedMessage.entities.italic` */
  "edit::italic": "edit::italic",
  /** `ctx.editedMessage.entities.underline` */
  "edit::underline": "edit::underline",
  /** `ctx.editedMessage.entities.strikethrough` */
  "edit::strikethrough": "edit::strikethrough",
  /** `ctx.editedMessage.entities.spoiler` */
  "edit::spoiler": "edit::spoiler",
  /** `ctx.editedMessage.entities.code` */
  "edit::code": "edit::code",
  /** `ctx.editedMessage.entities.pre` */
  "edit::pre": "edit::pre",
  /** `ctx.editedMessage.entities.text_link` */
  "edit::text_link": "edit::text_link",
  /** `ctx.editedMessage.entities.text_mention` */
  "edit::text_mention": "edit::text_mention",
  /** `ctx.editedMessage.entities.mention` */
  "edit:entities:mention": "edit:entities:mention",
  /** `ctx.editedMessage.entities.hashtag` */
  "edit:entities:hashtag": "edit:entities:hashtag",
  /** `ctx.editedMessage.entities.cashtag` */
  "edit:entities:cashtag": "edit:entities:cashtag",
  /** `ctx.editedMessage.entities.bot_command` */
  "edit:entities:bot_command": "edit:entities:bot_command",
  /** `ctx.editedMessage.entities.url` */
  "edit:entities:url": "edit:entities:url",
  /** `ctx.editedMessage.entities.email` */
  "edit:entities:email": "edit:entities:email",
  /** `ctx.editedMessage.entities.phone_number` */
  "edit:entities:phone_number": "edit:entities:phone_number",
  /** `ctx.editedMessage.entities.bold` */
  "edit:entities:bold": "edit:entities:bold",
  /** `ctx.editedMessage.entities.italic` */
  "edit:entities:italic": "edit:entities:italic",
  /** `ctx.editedMessage.entities.underline` */
  "edit:entities:underline": "edit:entities:underline",
  /** `ctx.editedMessage.entities.strikethrough` */
  "edit:entities:strikethrough": "edit:entities:strikethrough",
  /** `ctx.editedMessage.entities.spoiler` */
  "edit:entities:spoiler": "edit:entities:spoiler",
  /** `ctx.editedMessage.entities.code` */
  "edit:entities:code": "edit:entities:code",
  /** `ctx.editedMessage.entities.pre` */
  "edit:entities:pre": "edit:entities:pre",
  /** `ctx.editedMessage.entities.text_link` */
  "edit:entities:text_link": "edit:entities:text_link",
  /** `ctx.editedMessage.entities.text_mention` */
  "edit:entities:text_mention": "edit:entities:text_mention",
  /** `ctx.editedMessage.caption_entities` */
  "edit:caption_entities": "edit:caption_entities",
  /** `ctx.editedMessage.caption_entities.mention` */
  "edit:caption_entities:mention": "edit:caption_entities:mention",
  /** `ctx.editedMessage.caption_entities.hashtag` */
  "edit:caption_entities:hashtag": "edit:caption_entities:hashtag",
  /** `ctx.editedMessage.caption_entities.cashtag` */
  "edit:caption_entities:cashtag": "edit:caption_entities:cashtag",
  /** `ctx.editedMessage.caption_entities.bot_command` */
  "edit:caption_entities:bot_command": "edit:caption_entities:bot_command",
  /** `ctx.editedMessage.caption_entities.url` */
  "edit:caption_entities:url": "edit:caption_entities:url",
  /** `ctx.editedMessage.caption_entities.email` */
  "edit:caption_entities:email": "edit:caption_entities:email",
  /** `ctx.editedMessage.caption_entities.phone_number` */
  "edit:caption_entities:phone_number": "edit:caption_entities:phone_number",
  /** `ctx.editedMessage.caption_entities.bold` */
  "edit:caption_entities:bold": "edit:caption_entities:bold",
  /** `ctx.editedMessage.caption_entities.italic` */
  "edit:caption_entities:italic": "edit:caption_entities:italic",
  /** `ctx.editedMessage.caption_entities.underline` */
  "edit:caption_entities:underline": "edit:caption_entities:underline",
  /** `ctx.editedMessage.caption_entities.strikethrough` */
  "edit:caption_entities:strikethrough": "edit:caption_entities:strikethrough",
  /** `ctx.editedMessage.caption_entities.spoiler` */
  "edit:caption_entities:spoiler": "edit:caption_entities:spoiler",
  /** `ctx.editedMessage.caption_entities.code` */
  "edit:caption_entities:code": "edit:caption_entities:code",
  /** `ctx.editedMessage.caption_entities.pre` */
  "edit:caption_entities:pre": "edit:caption_entities:pre",
  /** `ctx.editedMessage.caption_entities.text_link` */
  "edit:caption_entities:text_link": "edit:caption_entities:text_link",
  /** `ctx.editedMessage.caption_entities.text_mention` */
  "edit:caption_entities:text_mention": "edit:caption_entities:text_mention",
  /** `ctx.editedMessage.caption` */
  "edit:caption": "edit:caption",
  /** `ctx.editedMessage.sticker` */
  "edit:sticker": "edit:sticker",
  /** `ctx.editedMessage.video_note` */
  "edit:video_note": "edit:video_note",
  /** `ctx.editedMessage.voice` */
  "edit:voice": "edit:voice",
  /** `ctx.editedMessage.contact` */
  "edit:contact": "edit:contact",
  /** `ctx.editedMessage.dice` */
  "edit:dice": "edit:dice",
  /** `ctx.editedMessage.poll` */
  "edit:poll": "edit:poll",
  /** `ctx.editedMessage.venue` */
  "edit:venue": "edit:venue",
  /** `ctx.editedMessage.new_chat_title` */
  "edit:new_chat_title": "edit:new_chat_title",
  /** `ctx.editedMessage.new_chat_photo` */
  "edit:new_chat_photo": "edit:new_chat_photo",
  /** `ctx.editedMessage.delete_chat_photo` */
  "edit:delete_chat_photo": "edit:delete_chat_photo",
  /** `ctx.editedMessage.message_auto_delete_timer_changed` */
  "edit:message_auto_delete_timer_changed": "edit:message_auto_delete_timer_changed",
  /** `ctx.editedMessage.pinned_message` */
  "edit:pinned_message": "edit:pinned_message",
  /** `ctx.editedMessage.invoice` */
  "edit:invoice": "edit:invoice",
  /** `ctx.editedMessage.proximity_alert_triggered` */
  "edit:proximity_alert_triggered": "edit:proximity_alert_triggered",
  /** `ctx.editedMessage.video_chat_scheduled` */
  "edit:video_chat_scheduled": "edit:video_chat_scheduled",
  /** `ctx.editedMessage.video_chat_started` */
  "edit:video_chat_started": "edit:video_chat_started",
  /** `ctx.editedMessage.video_chat_ended` */
  "edit:video_chat_ended": "edit:video_chat_ended",
  /** `ctx.editedMessage.video_chat_participants_invited` */
  "edit:video_chat_participants_invited": "edit:video_chat_participants_invited",
  /** `ctx.editedMessage.web_app_data` */
  "edit:web_app_data": "edit:web_app_data",
  /** `ctx.editedMessage.forward_date` */
  "edit:forward_date": "edit:forward_date",
  /** `ctx.editedMessage.is_automatic_forward` */
  "edit:is_automatic_forward": "edit:is_automatic_forward",
  /** `ctx.editedMessage.new_chat_members` */
  "edit:new_chat_members": "edit:new_chat_members",
  /** `ctx.editedMessage.new_chat_members.me` */
  "edit:new_chat_members:me": "edit:new_chat_members:me",
  /** `ctx.editedMessage.new_chat_members.is_bot` */
  "edit:new_chat_members:is_bot": "edit:new_chat_members:is_bot",
  /** `ctx.editedMessage.new_chat_members.is_premium` */
  "edit:new_chat_members:is_premium": "edit:new_chat_members:is_premium",
  /** `ctx.editedMessage.new_chat_members.added_to_attachment_menu` */
  "edit:new_chat_members:added_to_attachment_menu": "edit:new_chat_members:added_to_attachment_menu",
  /** `ctx.editedMessage.left_chat_member` */
  "edit:left_chat_member": "edit:left_chat_member",
  /** `ctx.editedMessage.left_chat_member.me` */
  "edit:left_chat_member:me": "edit:left_chat_member:me",
  /** `ctx.editedMessage.left_chat_member.is_bot` */
  "edit:left_chat_member:is_bot": "edit:left_chat_member:is_bot",
  /** `ctx.editedMessage.left_chat_member.is_premium` */
  "edit:left_chat_member:is_premium": "edit:left_chat_member:is_premium",
  /** `ctx.editedMessage.left_chat_member.added_to_attachment_menu` */
  "edit:left_chat_member:added_to_attachment_menu": "edit:left_chat_member:added_to_attachment_menu",
  /** `ctx.editedMessage.group_chat_created` */
  "edit:group_chat_created": "edit:group_chat_created",
  /** `ctx.editedMessage.supergroup_chat_created` */
  "edit:supergroup_chat_created": "edit:supergroup_chat_created",
  /** `ctx.editedMessage.migrate_to_chat_id` */
  "edit:migrate_to_chat_id": "edit:migrate_to_chat_id",
  /** `ctx.editedMessage.migrate_from_chat_id` */
  "edit:migrate_from_chat_id": "edit:migrate_from_chat_id",
  /** `ctx.editedMessage.successful_payment` */
  "edit:successful_payment": "edit:successful_payment",
  /** `ctx.editedMessage.connected_website` */
  "edit:connected_website": "edit:connected_website",
  /** `ctx.editedMessage.passport_data` */
  "edit:passport_data": "edit:passport_data",
  /** `ctx.editedMessage.text` */
  "edited_message:text": "edited_message:text",
  /** `ctx.editedMessage.animation` */
  "edited_message:animation": "edited_message:animation",
  /** `ctx.editedMessage.file` */
  "edited_message:file": "edited_message:file",
  /** `ctx.editedMessage.audio` */
  "edited_message:audio": "edited_message:audio",
  /** `ctx.editedMessage.document` */
  "edited_message:document": "edited_message:document",
  /** `ctx.editedMessage.photo` */
  "edited_message:photo": "edited_message:photo",
  /** `ctx.editedMessage.media` */
  "edited_message:media": "edited_message:media",
  /** `ctx.editedMessage.video` */
  "edited_message:video": "edited_message:video",
  /** `ctx.editedMessage.game` */
  "edited_message:game": "edited_message:game",
  /** `ctx.editedMessage.location` */
  "edited_message:location": "edited_message:location",
  /** `ctx.editedMessage.entities` */
  "edited_message:entities": "edited_message:entities",
  /** `ctx.editedMessage.entities.mention` */
  "edited_message::mention": "edited_message::mention",
  /** `ctx.editedMessage.entities.hashtag` */
  "edited_message::hashtag": "edited_message::hashtag",
  /** `ctx.editedMessage.entities.cashtag` */
  "edited_message::cashtag": "edited_message::cashtag",
  /** `ctx.editedMessage.entities.bot_command` */
  "edited_message::bot_command": "edited_message::bot_command",
  /** `ctx.editedMessage.entities.url` */
  "edited_message::url": "edited_message::url",
  /** `ctx.editedMessage.entities.email` */
  "edited_message::email": "edited_message::email",
  /** `ctx.editedMessage.entities.phone_number` */
  "edited_message::phone_number": "edited_message::phone_number",
  /** `ctx.editedMessage.entities.bold` */
  "edited_message::bold": "edited_message::bold",
  /** `ctx.editedMessage.entities.italic` */
  "edited_message::italic": "edited_message::italic",
  /** `ctx.editedMessage.entities.underline` */
  "edited_message::underline": "edited_message::underline",
  /** `ctx.editedMessage.entities.strikethrough` */
  "edited_message::strikethrough": "edited_message::strikethrough",
  /** `ctx.editedMessage.entities.spoiler` */
  "edited_message::spoiler": "edited_message::spoiler",
  /** `ctx.editedMessage.entities.code` */
  "edited_message::code": "edited_message::code",
  /** `ctx.editedMessage.entities.pre` */
  "edited_message::pre": "edited_message::pre",
  /** `ctx.editedMessage.entities.text_link` */
  "edited_message::text_link": "edited_message::text_link",
  /** `ctx.editedMessage.entities.text_mention` */
  "edited_message::text_mention": "edited_message::text_mention",
  /** `ctx.editedMessage.entities.mention` */
  "edited_message:entities:mention": "edited_message:entities:mention",
  /** `ctx.editedMessage.entities.hashtag` */
  "edited_message:entities:hashtag": "edited_message:entities:hashtag",
  /** `ctx.editedMessage.entities.cashtag` */
  "edited_message:entities:cashtag": "edited_message:entities:cashtag",
  /** `ctx.editedMessage.entities.bot_command` */
  "edited_message:entities:bot_command": "edited_message:entities:bot_command",
  /** `ctx.editedMessage.entities.url` */
  "edited_message:entities:url": "edited_message:entities:url",
  /** `ctx.editedMessage.entities.email` */
  "edited_message:entities:email": "edited_message:entities:email",
  /** `ctx.editedMessage.entities.phone_number` */
  "edited_message:entities:phone_number": "edited_message:entities:phone_number",
  /** `ctx.editedMessage.entities.bold` */
  "edited_message:entities:bold": "edited_message:entities:bold",
  /** `ctx.editedMessage.entities.italic` */
  "edited_message:entities:italic": "edited_message:entities:italic",
  /** `ctx.editedMessage.entities.underline` */
  "edited_message:entities:underline": "edited_message:entities:underline",
  /** `ctx.editedMessage.entities.strikethrough` */
  "edited_message:entities:strikethrough": "edited_message:entities:strikethrough",
  /** `ctx.editedMessage.entities.spoiler` */
  "edited_message:entities:spoiler": "edited_message:entities:spoiler",
  /** `ctx.editedMessage.entities.code` */
  "edited_message:entities:code": "edited_message:entities:code",
  /** `ctx.editedMessage.entities.pre` */
  "edited_message:entities:pre": "edited_message:entities:pre",
  /** `ctx.editedMessage.entities.text_link` */
  "edited_message:entities:text_link": "edited_message:entities:text_link",
  /** `ctx.editedMessage.entities.text_mention` */
  "edited_message:entities:text_mention": "edited_message:entities:text_mention",
  /** `ctx.editedMessage.caption_entities` */
  "edited_message:caption_entities": "edited_message:caption_entities",
  /** `ctx.editedMessage.caption_entities.mention` */
  "edited_message:caption_entities:mention": "edited_message:caption_entities:mention",
  /** `ctx.editedMessage.caption_entities.hashtag` */
  "edited_message:caption_entities:hashtag": "edited_message:caption_entities:hashtag",
  /** `ctx.editedMessage.caption_entities.cashtag` */
  "edited_message:caption_entities:cashtag": "edited_message:caption_entities:cashtag",
  /** `ctx.editedMessage.caption_entities.bot_command` */
  "edited_message:caption_entities:bot_command": "edited_message:caption_entities:bot_command",
  /** `ctx.editedMessage.caption_entities.url` */
  "edited_message:caption_entities:url": "edited_message:caption_entities:url",
  /** `ctx.editedMessage.caption_entities.email` */
  "edited_message:caption_entities:email": "edited_message:caption_entities:email",
  /** `ctx.editedMessage.caption_entities.phone_number` */
  "edited_message:caption_entities:phone_number": "edited_message:caption_entities:phone_number",
  /** `ctx.editedMessage.caption_entities.bold` */
  "edited_message:caption_entities:bold": "edited_message:caption_entities:bold",
  /** `ctx.editedMessage.caption_entities.italic` */
  "edited_message:caption_entities:italic": "edited_message:caption_entities:italic",
  /** `ctx.editedMessage.caption_entities.underline` */
  "edited_message:caption_entities:underline": "edited_message:caption_entities:underline",
  /** `ctx.editedMessage.caption_entities.strikethrough` */
  "edited_message:caption_entities:strikethrough": "edited_message:caption_entities:strikethrough",
  /** `ctx.editedMessage.caption_entities.spoiler` */
  "edited_message:caption_entities:spoiler": "edited_message:caption_entities:spoiler",
  /** `ctx.editedMessage.caption_entities.code` */
  "edited_message:caption_entities:code": "edited_message:caption_entities:code",
  /** `ctx.editedMessage.caption_entities.pre` */
  "edited_message:caption_entities:pre": "edited_message:caption_entities:pre",
  /** `ctx.editedMessage.caption_entities.text_link` */
  "edited_message:caption_entities:text_link": "edited_message:caption_entities:text_link",
  /** `ctx.editedMessage.caption_entities.text_mention` */
  "edited_message:caption_entities:text_mention": "edited_message:caption_entities:text_mention",
  /** `ctx.editedMessage.caption` */
  "edited_message:caption": "edited_message:caption",
  /** `ctx.editedMessage.sticker` */
  "edited_message:sticker": "edited_message:sticker",
  /** `ctx.editedMessage.video_note` */
  "edited_message:video_note": "edited_message:video_note",
  /** `ctx.editedMessage.voice` */
  "edited_message:voice": "edited_message:voice",
  /** `ctx.editedMessage.contact` */
  "edited_message:contact": "edited_message:contact",
  /** `ctx.editedMessage.dice` */
  "edited_message:dice": "edited_message:dice",
  /** `ctx.editedMessage.poll` */
  "edited_message:poll": "edited_message:poll",
  /** `ctx.editedMessage.venue` */
  "edited_message:venue": "edited_message:venue",
  /** `ctx.editedMessage.new_chat_title` */
  "edited_message:new_chat_title": "edited_message:new_chat_title",
  /** `ctx.editedMessage.new_chat_photo` */
  "edited_message:new_chat_photo": "edited_message:new_chat_photo",
  /** `ctx.editedMessage.delete_chat_photo` */
  "edited_message:delete_chat_photo": "edited_message:delete_chat_photo",
  /** `ctx.editedMessage.message_auto_delete_timer_changed` */
  "edited_message:message_auto_delete_timer_changed": "edited_message:message_auto_delete_timer_changed",
  /** `ctx.editedMessage.pinned_message` */
  "edited_message:pinned_message": "edited_message:pinned_message",
  /** `ctx.editedMessage.invoice` */
  "edited_message:invoice": "edited_message:invoice",
  /** `ctx.editedMessage.proximity_alert_triggered` */
  "edited_message:proximity_alert_triggered": "edited_message:proximity_alert_triggered",
  /** `ctx.editedMessage.video_chat_scheduled` */
  "edited_message:video_chat_scheduled": "edited_message:video_chat_scheduled",
  /** `ctx.editedMessage.video_chat_started` */
  "edited_message:video_chat_started": "edited_message:video_chat_started",
  /** `ctx.editedMessage.video_chat_ended` */
  "edited_message:video_chat_ended": "edited_message:video_chat_ended",
  /** `ctx.editedMessage.video_chat_participants_invited` */
  "edited_message:video_chat_participants_invited": "edited_message:video_chat_participants_invited",
  /** `ctx.editedMessage.web_app_data` */
  "edited_message:web_app_data": "edited_message:web_app_data",
  /** `ctx.editedMessage.forward_date` */
  "edited_message:forward_date": "edited_message:forward_date",
  /** `ctx.editedMessage.is_automatic_forward` */
  "edited_message:is_automatic_forward": "edited_message:is_automatic_forward",
  /** `ctx.editedMessage.new_chat_members` */
  "edited_message:new_chat_members": "edited_message:new_chat_members",
  /** `ctx.editedMessage.new_chat_members.me` */
  "edited_message:new_chat_members:me": "edited_message:new_chat_members:me",
  /** `ctx.editedMessage.new_chat_members.is_bot` */
  "edited_message:new_chat_members:is_bot": "edited_message:new_chat_members:is_bot",
  /** `ctx.editedMessage.new_chat_members.is_premium` */
  "edited_message:new_chat_members:is_premium": "edited_message:new_chat_members:is_premium",
  /** `ctx.editedMessage.new_chat_members.added_to_attachment_menu` */
  "edited_message:new_chat_members:added_to_attachment_menu": "edited_message:new_chat_members:added_to_attachment_menu",
  /** `ctx.editedMessage.left_chat_member` */
  "edited_message:left_chat_member": "edited_message:left_chat_member",
  /** `ctx.editedMessage.left_chat_member.me` */
  "edited_message:left_chat_member:me": "edited_message:left_chat_member:me",
  /** `ctx.editedMessage.left_chat_member.is_bot` */
  "edited_message:left_chat_member:is_bot": "edited_message:left_chat_member:is_bot",
  /** `ctx.editedMessage.left_chat_member.is_premium` */
  "edited_message:left_chat_member:is_premium": "edited_message:left_chat_member:is_premium",
  /** `ctx.editedMessage.left_chat_member.added_to_attachment_menu` */
  "edited_message:left_chat_member:added_to_attachment_menu": "edited_message:left_chat_member:added_to_attachment_menu",
  /** `ctx.editedMessage.group_chat_created` */
  "edited_message:group_chat_created": "edited_message:group_chat_created",
  /** `ctx.editedMessage.supergroup_chat_created` */
  "edited_message:supergroup_chat_created": "edited_message:supergroup_chat_created",
  /** `ctx.editedMessage.migrate_to_chat_id` */
  "edited_message:migrate_to_chat_id": "edited_message:migrate_to_chat_id",
  /** `ctx.editedMessage.migrate_from_chat_id` */
  "edited_message:migrate_from_chat_id": "edited_message:migrate_from_chat_id",
  /** `ctx.editedMessage.successful_payment` */
  "edited_message:successful_payment": "edited_message:successful_payment",
  /** `ctx.editedMessage.connected_website` */
  "edited_message:connected_website": "edited_message:connected_website",
  /** `ctx.editedMessage.passport_data` */
  "edited_message:passport_data": "edited_message:passport_data",
  /** `ctx.channelPost` */
  "channel_post": "channel_post",
  /** `ctx.message.channel_chat_created` */
  ":channel_chat_created": ":channel_chat_created",
  /** `ctx.msg.channel_chat_created` */
  "msg:channel_chat_created": "msg:channel_chat_created",
  /** `ctx.channelPost.text` */
  "channel_post:text": "channel_post:text",
  /** `ctx.channelPost.animation` */
  "channel_post:animation": "channel_post:animation",
  /** `ctx.channelPost.file` */
  "channel_post:file": "channel_post:file",
  /** `ctx.channelPost.audio` */
  "channel_post:audio": "channel_post:audio",
  /** `ctx.channelPost.document` */
  "channel_post:document": "channel_post:document",
  /** `ctx.channelPost.photo` */
  "channel_post:photo": "channel_post:photo",
  /** `ctx.channelPost.media` */
  "channel_post:media": "channel_post:media",
  /** `ctx.channelPost.video` */
  "channel_post:video": "channel_post:video",
  /** `ctx.channelPost.game` */
  "channel_post:game": "channel_post:game",
  /** `ctx.channelPost.location` */
  "channel_post:location": "channel_post:location",
  /** `ctx.channelPost.entities` */
  "channel_post:entities": "channel_post:entities",
  /** `ctx.channelPost.entities.mention` */
  "channel_post::mention": "channel_post::mention",
  /** `ctx.channelPost.entities.hashtag` */
  "channel_post::hashtag": "channel_post::hashtag",
  /** `ctx.channelPost.entities.cashtag` */
  "channel_post::cashtag": "channel_post::cashtag",
  /** `ctx.channelPost.entities.bot_command` */
  "channel_post::bot_command": "channel_post::bot_command",
  /** `ctx.channelPost.entities.url` */
  "channel_post::url": "channel_post::url",
  /** `ctx.channelPost.entities.email` */
  "channel_post::email": "channel_post::email",
  /** `ctx.channelPost.entities.phone_number` */
  "channel_post::phone_number": "channel_post::phone_number",
  /** `ctx.channelPost.entities.bold` */
  "channel_post::bold": "channel_post::bold",
  /** `ctx.channelPost.entities.italic` */
  "channel_post::italic": "channel_post::italic",
  /** `ctx.channelPost.entities.underline` */
  "channel_post::underline": "channel_post::underline",
  /** `ctx.channelPost.entities.strikethrough` */
  "channel_post::strikethrough": "channel_post::strikethrough",
  /** `ctx.channelPost.entities.spoiler` */
  "channel_post::spoiler": "channel_post::spoiler",
  /** `ctx.channelPost.entities.code` */
  "channel_post::code": "channel_post::code",
  /** `ctx.channelPost.entities.pre` */
  "channel_post::pre": "channel_post::pre",
  /** `ctx.channelPost.entities.text_link` */
  "channel_post::text_link": "channel_post::text_link",
  /** `ctx.channelPost.entities.text_mention` */
  "channel_post::text_mention": "channel_post::text_mention",
  /** `ctx.channelPost.entities.mention` */
  "channel_post:entities:mention": "channel_post:entities:mention",
  /** `ctx.channelPost.entities.hashtag` */
  "channel_post:entities:hashtag": "channel_post:entities:hashtag",
  /** `ctx.channelPost.entities.cashtag` */
  "channel_post:entities:cashtag": "channel_post:entities:cashtag",
  /** `ctx.channelPost.entities.bot_command` */
  "channel_post:entities:bot_command": "channel_post:entities:bot_command",
  /** `ctx.channelPost.entities.url` */
  "channel_post:entities:url": "channel_post:entities:url",
  /** `ctx.channelPost.entities.email` */
  "channel_post:entities:email": "channel_post:entities:email",
  /** `ctx.channelPost.entities.phone_number` */
  "channel_post:entities:phone_number": "channel_post:entities:phone_number",
  /** `ctx.channelPost.entities.bold` */
  "channel_post:entities:bold": "channel_post:entities:bold",
  /** `ctx.channelPost.entities.italic` */
  "channel_post:entities:italic": "channel_post:entities:italic",
  /** `ctx.channelPost.entities.underline` */
  "channel_post:entities:underline": "channel_post:entities:underline",
  /** `ctx.channelPost.entities.strikethrough` */
  "channel_post:entities:strikethrough": "channel_post:entities:strikethrough",
  /** `ctx.channelPost.entities.spoiler` */
  "channel_post:entities:spoiler": "channel_post:entities:spoiler",
  /** `ctx.channelPost.entities.code` */
  "channel_post:entities:code": "channel_post:entities:code",
  /** `ctx.channelPost.entities.pre` */
  "channel_post:entities:pre": "channel_post:entities:pre",
  /** `ctx.channelPost.entities.text_link` */
  "channel_post:entities:text_link": "channel_post:entities:text_link",
  /** `ctx.channelPost.entities.text_mention` */
  "channel_post:entities:text_mention": "channel_post:entities:text_mention",
  /** `ctx.channelPost.caption_entities` */
  "channel_post:caption_entities": "channel_post:caption_entities",
  /** `ctx.channelPost.caption_entities.mention` */
  "channel_post:caption_entities:mention": "channel_post:caption_entities:mention",
  /** `ctx.channelPost.caption_entities.hashtag` */
  "channel_post:caption_entities:hashtag": "channel_post:caption_entities:hashtag",
  /** `ctx.channelPost.caption_entities.cashtag` */
  "channel_post:caption_entities:cashtag": "channel_post:caption_entities:cashtag",
  /** `ctx.channelPost.caption_entities.bot_command` */
  "channel_post:caption_entities:bot_command": "channel_post:caption_entities:bot_command",
  /** `ctx.channelPost.caption_entities.url` */
  "channel_post:caption_entities:url": "channel_post:caption_entities:url",
  /** `ctx.channelPost.caption_entities.email` */
  "channel_post:caption_entities:email": "channel_post:caption_entities:email",
  /** `ctx.channelPost.caption_entities.phone_number` */
  "channel_post:caption_entities:phone_number": "channel_post:caption_entities:phone_number",
  /** `ctx.channelPost.caption_entities.bold` */
  "channel_post:caption_entities:bold": "channel_post:caption_entities:bold",
  /** `ctx.channelPost.caption_entities.italic` */
  "channel_post:caption_entities:italic": "channel_post:caption_entities:italic",
  /** `ctx.channelPost.caption_entities.underline` */
  "channel_post:caption_entities:underline": "channel_post:caption_entities:underline",
  /** `ctx.channelPost.caption_entities.strikethrough` */
  "channel_post:caption_entities:strikethrough": "channel_post:caption_entities:strikethrough",
  /** `ctx.channelPost.caption_entities.spoiler` */
  "channel_post:caption_entities:spoiler": "channel_post:caption_entities:spoiler",
  /** `ctx.channelPost.caption_entities.code` */
  "channel_post:caption_entities:code": "channel_post:caption_entities:code",
  /** `ctx.channelPost.caption_entities.pre` */
  "channel_post:caption_entities:pre": "channel_post:caption_entities:pre",
  /** `ctx.channelPost.caption_entities.text_link` */
  "channel_post:caption_entities:text_link": "channel_post:caption_entities:text_link",
  /** `ctx.channelPost.caption_entities.text_mention` */
  "channel_post:caption_entities:text_mention": "channel_post:caption_entities:text_mention",
  /** `ctx.channelPost.caption` */
  "channel_post:caption": "channel_post:caption",
  /** `ctx.channelPost.sticker` */
  "channel_post:sticker": "channel_post:sticker",
  /** `ctx.channelPost.video_note` */
  "channel_post:video_note": "channel_post:video_note",
  /** `ctx.channelPost.voice` */
  "channel_post:voice": "channel_post:voice",
  /** `ctx.channelPost.contact` */
  "channel_post:contact": "channel_post:contact",
  /** `ctx.channelPost.dice` */
  "channel_post:dice": "channel_post:dice",
  /** `ctx.channelPost.poll` */
  "channel_post:poll": "channel_post:poll",
  /** `ctx.channelPost.venue` */
  "channel_post:venue": "channel_post:venue",
  /** `ctx.channelPost.new_chat_title` */
  "channel_post:new_chat_title": "channel_post:new_chat_title",
  /** `ctx.channelPost.new_chat_photo` */
  "channel_post:new_chat_photo": "channel_post:new_chat_photo",
  /** `ctx.channelPost.delete_chat_photo` */
  "channel_post:delete_chat_photo": "channel_post:delete_chat_photo",
  /** `ctx.channelPost.message_auto_delete_timer_changed` */
  "channel_post:message_auto_delete_timer_changed": "channel_post:message_auto_delete_timer_changed",
  /** `ctx.channelPost.pinned_message` */
  "channel_post:pinned_message": "channel_post:pinned_message",
  /** `ctx.channelPost.invoice` */
  "channel_post:invoice": "channel_post:invoice",
  /** `ctx.channelPost.proximity_alert_triggered` */
  "channel_post:proximity_alert_triggered": "channel_post:proximity_alert_triggered",
  /** `ctx.channelPost.video_chat_scheduled` */
  "channel_post:video_chat_scheduled": "channel_post:video_chat_scheduled",
  /** `ctx.channelPost.video_chat_started` */
  "channel_post:video_chat_started": "channel_post:video_chat_started",
  /** `ctx.channelPost.video_chat_ended` */
  "channel_post:video_chat_ended": "channel_post:video_chat_ended",
  /** `ctx.channelPost.video_chat_participants_invited` */
  "channel_post:video_chat_participants_invited": "channel_post:video_chat_participants_invited",
  /** `ctx.channelPost.web_app_data` */
  "channel_post:web_app_data": "channel_post:web_app_data",
  /** `ctx.channelPost.forward_date` */
  "channel_post:forward_date": "channel_post:forward_date",
  /** `ctx.channelPost.is_automatic_forward` */
  "channel_post:is_automatic_forward": "channel_post:is_automatic_forward",
  /** `ctx.channelPost.channel_chat_created` */
  "channel_post:channel_chat_created": "channel_post:channel_chat_created",
  /** `ctx.editedChannelPost` */
  "edited_channel_post": "edited_channel_post",
  /** `ctx.editedMessage.channel_chat_created` */
  "edit:channel_chat_created": "edit:channel_chat_created",
  /** `ctx.editedChannelPost.text` */
  "edited_channel_post:text": "edited_channel_post:text",
  /** `ctx.editedChannelPost.animation` */
  "edited_channel_post:animation": "edited_channel_post:animation",
  /** `ctx.editedChannelPost.file` */
  "edited_channel_post:file": "edited_channel_post:file",
  /** `ctx.editedChannelPost.audio` */
  "edited_channel_post:audio": "edited_channel_post:audio",
  /** `ctx.editedChannelPost.document` */
  "edited_channel_post:document": "edited_channel_post:document",
  /** `ctx.editedChannelPost.photo` */
  "edited_channel_post:photo": "edited_channel_post:photo",
  /** `ctx.editedChannelPost.media` */
  "edited_channel_post:media": "edited_channel_post:media",
  /** `ctx.editedChannelPost.video` */
  "edited_channel_post:video": "edited_channel_post:video",
  /** `ctx.editedChannelPost.game` */
  "edited_channel_post:game": "edited_channel_post:game",
  /** `ctx.editedChannelPost.location` */
  "edited_channel_post:location": "edited_channel_post:location",
  /** `ctx.editedChannelPost.entities` */
  "edited_channel_post:entities": "edited_channel_post:entities",
  /** `ctx.editedChannelPost.entities.mention` */
  "edited_channel_post::mention": "edited_channel_post::mention",
  /** `ctx.editedChannelPost.entities.hashtag` */
  "edited_channel_post::hashtag": "edited_channel_post::hashtag",
  /** `ctx.editedChannelPost.entities.cashtag` */
  "edited_channel_post::cashtag": "edited_channel_post::cashtag",
  /** `ctx.editedChannelPost.entities.bot_command` */
  "edited_channel_post::bot_command": "edited_channel_post::bot_command",
  /** `ctx.editedChannelPost.entities.url` */
  "edited_channel_post::url": "edited_channel_post::url",
  /** `ctx.editedChannelPost.entities.email` */
  "edited_channel_post::email": "edited_channel_post::email",
  /** `ctx.editedChannelPost.entities.phone_number` */
  "edited_channel_post::phone_number": "edited_channel_post::phone_number",
  /** `ctx.editedChannelPost.entities.bold` */
  "edited_channel_post::bold": "edited_channel_post::bold",
  /** `ctx.editedChannelPost.entities.italic` */
  "edited_channel_post::italic": "edited_channel_post::italic",
  /** `ctx.editedChannelPost.entities.underline` */
  "edited_channel_post::underline": "edited_channel_post::underline",
  /** `ctx.editedChannelPost.entities.strikethrough` */
  "edited_channel_post::strikethrough": "edited_channel_post::strikethrough",
  /** `ctx.editedChannelPost.entities.spoiler` */
  "edited_channel_post::spoiler": "edited_channel_post::spoiler",
  /** `ctx.editedChannelPost.entities.code` */
  "edited_channel_post::code": "edited_channel_post::code",
  /** `ctx.editedChannelPost.entities.pre` */
  "edited_channel_post::pre": "edited_channel_post::pre",
  /** `ctx.editedChannelPost.entities.text_link` */
  "edited_channel_post::text_link": "edited_channel_post::text_link",
  /** `ctx.editedChannelPost.entities.text_mention` */
  "edited_channel_post::text_mention": "edited_channel_post::text_mention",
  /** `ctx.editedChannelPost.entities.mention` */
  "edited_channel_post:entities:mention": "edited_channel_post:entities:mention",
  /** `ctx.editedChannelPost.entities.hashtag` */
  "edited_channel_post:entities:hashtag": "edited_channel_post:entities:hashtag",
  /** `ctx.editedChannelPost.entities.cashtag` */
  "edited_channel_post:entities:cashtag": "edited_channel_post:entities:cashtag",
  /** `ctx.editedChannelPost.entities.bot_command` */
  "edited_channel_post:entities:bot_command": "edited_channel_post:entities:bot_command",
  /** `ctx.editedChannelPost.entities.url` */
  "edited_channel_post:entities:url": "edited_channel_post:entities:url",
  /** `ctx.editedChannelPost.entities.email` */
  "edited_channel_post:entities:email": "edited_channel_post:entities:email",
  /** `ctx.editedChannelPost.entities.phone_number` */
  "edited_channel_post:entities:phone_number": "edited_channel_post:entities:phone_number",
  /** `ctx.editedChannelPost.entities.bold` */
  "edited_channel_post:entities:bold": "edited_channel_post:entities:bold",
  /** `ctx.editedChannelPost.entities.italic` */
  "edited_channel_post:entities:italic": "edited_channel_post:entities:italic",
  /** `ctx.editedChannelPost.entities.underline` */
  "edited_channel_post:entities:underline": "edited_channel_post:entities:underline",
  /** `ctx.editedChannelPost.entities.strikethrough` */
  "edited_channel_post:entities:strikethrough": "edited_channel_post:entities:strikethrough",
  /** `ctx.editedChannelPost.entities.spoiler` */
  "edited_channel_post:entities:spoiler": "edited_channel_post:entities:spoiler",
  /** `ctx.editedChannelPost.entities.code` */
  "edited_channel_post:entities:code": "edited_channel_post:entities:code",
  /** `ctx.editedChannelPost.entities.pre` */
  "edited_channel_post:entities:pre": "edited_channel_post:entities:pre",
  /** `ctx.editedChannelPost.entities.text_link` */
  "edited_channel_post:entities:text_link": "edited_channel_post:entities:text_link",
  /** `ctx.editedChannelPost.entities.text_mention` */
  "edited_channel_post:entities:text_mention": "edited_channel_post:entities:text_mention",
  /** `ctx.editedChannelPost.caption_entities` */
  "edited_channel_post:caption_entities": "edited_channel_post:caption_entities",
  /** `ctx.editedChannelPost.caption_entities.mention` */
  "edited_channel_post:caption_entities:mention": "edited_channel_post:caption_entities:mention",
  /** `ctx.editedChannelPost.caption_entities.hashtag` */
  "edited_channel_post:caption_entities:hashtag": "edited_channel_post:caption_entities:hashtag",
  /** `ctx.editedChannelPost.caption_entities.cashtag` */
  "edited_channel_post:caption_entities:cashtag": "edited_channel_post:caption_entities:cashtag",
  /** `ctx.editedChannelPost.caption_entities.bot_command` */
  "edited_channel_post:caption_entities:bot_command": "edited_channel_post:caption_entities:bot_command",
  /** `ctx.editedChannelPost.caption_entities.url` */
  "edited_channel_post:caption_entities:url": "edited_channel_post:caption_entities:url",
  /** `ctx.editedChannelPost.caption_entities.email` */
  "edited_channel_post:caption_entities:email": "edited_channel_post:caption_entities:email",
  /** `ctx.editedChannelPost.caption_entities.phone_number` */
  "edited_channel_post:caption_entities:phone_number": "edited_channel_post:caption_entities:phone_number",
  /** `ctx.editedChannelPost.caption_entities.bold` */
  "edited_channel_post:caption_entities:bold": "edited_channel_post:caption_entities:bold",
  /** `ctx.editedChannelPost.caption_entities.italic` */
  "edited_channel_post:caption_entities:italic": "edited_channel_post:caption_entities:italic",
  /** `ctx.editedChannelPost.caption_entities.underline` */
  "edited_channel_post:caption_entities:underline": "edited_channel_post:caption_entities:underline",
  /** `ctx.editedChannelPost.caption_entities.strikethrough` */
  "edited_channel_post:caption_entities:strikethrough": "edited_channel_post:caption_entities:strikethrough",
  /** `ctx.editedChannelPost.caption_entities.spoiler` */
  "edited_channel_post:caption_entities:spoiler": "edited_channel_post:caption_entities:spoiler",
  /** `ctx.editedChannelPost.caption_entities.code` */
  "edited_channel_post:caption_entities:code": "edited_channel_post:caption_entities:code",
  /** `ctx.editedChannelPost.caption_entities.pre` */
  "edited_channel_post:caption_entities:pre": "edited_channel_post:caption_entities:pre",
  /** `ctx.editedChannelPost.caption_entities.text_link` */
  "edited_channel_post:caption_entities:text_link": "edited_channel_post:caption_entities:text_link",
  /** `ctx.editedChannelPost.caption_entities.text_mention` */
  "edited_channel_post:caption_entities:text_mention": "edited_channel_post:caption_entities:text_mention",
  /** `ctx.editedChannelPost.caption` */
  "edited_channel_post:caption": "edited_channel_post:caption",
  /** `ctx.editedChannelPost.sticker` */
  "edited_channel_post:sticker": "edited_channel_post:sticker",
  /** `ctx.editedChannelPost.video_note` */
  "edited_channel_post:video_note": "edited_channel_post:video_note",
  /** `ctx.editedChannelPost.voice` */
  "edited_channel_post:voice": "edited_channel_post:voice",
  /** `ctx.editedChannelPost.contact` */
  "edited_channel_post:contact": "edited_channel_post:contact",
  /** `ctx.editedChannelPost.dice` */
  "edited_channel_post:dice": "edited_channel_post:dice",
  /** `ctx.editedChannelPost.poll` */
  "edited_channel_post:poll": "edited_channel_post:poll",
  /** `ctx.editedChannelPost.venue` */
  "edited_channel_post:venue": "edited_channel_post:venue",
  /** `ctx.editedChannelPost.new_chat_title` */
  "edited_channel_post:new_chat_title": "edited_channel_post:new_chat_title",
  /** `ctx.editedChannelPost.new_chat_photo` */
  "edited_channel_post:new_chat_photo": "edited_channel_post:new_chat_photo",
  /** `ctx.editedChannelPost.delete_chat_photo` */
  "edited_channel_post:delete_chat_photo": "edited_channel_post:delete_chat_photo",
  /** `ctx.editedChannelPost.message_auto_delete_timer_changed` */
  "edited_channel_post:message_auto_delete_timer_changed": "edited_channel_post:message_auto_delete_timer_changed",
  /** `ctx.editedChannelPost.pinned_message` */
  "edited_channel_post:pinned_message": "edited_channel_post:pinned_message",
  /** `ctx.editedChannelPost.invoice` */
  "edited_channel_post:invoice": "edited_channel_post:invoice",
  /** `ctx.editedChannelPost.proximity_alert_triggered` */
  "edited_channel_post:proximity_alert_triggered": "edited_channel_post:proximity_alert_triggered",
  /** `ctx.editedChannelPost.video_chat_scheduled` */
  "edited_channel_post:video_chat_scheduled": "edited_channel_post:video_chat_scheduled",
  /** `ctx.editedChannelPost.video_chat_started` */
  "edited_channel_post:video_chat_started": "edited_channel_post:video_chat_started",
  /** `ctx.editedChannelPost.video_chat_ended` */
  "edited_channel_post:video_chat_ended": "edited_channel_post:video_chat_ended",
  /** `ctx.editedChannelPost.video_chat_participants_invited` */
  "edited_channel_post:video_chat_participants_invited": "edited_channel_post:video_chat_participants_invited",
  /** `ctx.editedChannelPost.web_app_data` */
  "edited_channel_post:web_app_data": "edited_channel_post:web_app_data",
  /** `ctx.editedChannelPost.forward_date` */
  "edited_channel_post:forward_date": "edited_channel_post:forward_date",
  /** `ctx.editedChannelPost.is_automatic_forward` */
  "edited_channel_post:is_automatic_forward": "edited_channel_post:is_automatic_forward",
  /** `ctx.editedChannelPost.channel_chat_created` */
  "edited_channel_post:channel_chat_created": "edited_channel_post:channel_chat_created",
  /** `ctx.inlineQuery` */
  "inline_query": "inline_query",
  /** `ctx.chosenInlineResult` */
  "chosen_inline_result": "chosen_inline_result",
  /** `ctx.callbackQuery` */
  "callback_query": "callback_query",
  /** `ctx.callbackQuery.data` */
  "callback_query:data": "callback_query:data",
  /** `ctx.callbackQuery.game_short_name` */
  "callback_query:game_short_name": "callback_query:game_short_name",
  /** `ctx.shippingQuery` */
  "shipping_query": "shipping_query",
  /** `ctx.preCheckoutQuery` */
  "pre_checkout_query": "pre_checkout_query",
  /** `ctx.poll` */
  "poll": "poll",
  /** `ctx.pollAnswer` */
  "poll_answer": "poll_answer",
  /** `ctx.myChatMember` */
  "my_chat_member": "my_chat_member",
  /** `ctx.myChatMember.from` */
  "my_chat_member:from": "my_chat_member:from",
  /** `ctx.myChatMember.from.me` */
  "my_chat_member:from:me": "my_chat_member:from:me",
  /** `ctx.myChatMember.from.is_bot` */
  "my_chat_member:from:is_bot": "my_chat_member:from:is_bot",
  /** `ctx.myChatMember.from.is_premium` */
  "my_chat_member:from:is_premium": "my_chat_member:from:is_premium",
  /** `ctx.myChatMember.from.added_to_attachment_menu` */
  "my_chat_member:from:added_to_attachment_menu": "my_chat_member:from:added_to_attachment_menu",
  /** `ctx.chatMember` */
  "chat_member": "chat_member",
  /** `ctx.chatMember.from` */
  "chat_member:from": "chat_member:from",
  /** `ctx.chatMember.from.me` */
  "chat_member:from:me": "chat_member:from:me",
  /** `ctx.chatMember.from.is_bot` */
  "chat_member:from:is_bot": "chat_member:from:is_bot",
  /** `ctx.chatMember.from.is_premium` */
  "chat_member:from:is_premium": "chat_member:from:is_premium",
  /** `ctx.chatMember.from.added_to_attachment_menu` */
  "chat_member:from:added_to_attachment_menu": "chat_member:from:added_to_attachment_menu",
  /** `ctx.chatJoinRequest` */
  "chat_join_request": "chat_join_request",
} as const;