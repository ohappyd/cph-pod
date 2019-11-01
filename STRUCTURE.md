# cph-pod database structure

PrintContext
  label,

Publisher
  name,
  address,
  email,
  phoneNumber,
  printContexts [#]

BookCategory
  name,
  description

Addenda
  label,

Book
  title,
  subTitle,
  author,
  originalTitle,
  copyrightYear,
  editionInfos,
  addendas [#],
  lang,
  #category,
  chapterName,
  partName,

User
  firstName,
  lastName,
  email,
  password,
  ldapAccount,
  roles [#],
  publishers [#],
  lang,

Role
  label,

PrintRequest
  command,
  isbn,
  #user,
  #publisher,
  #book,
  ip,
  completed,
  downloaded,
  customEditionInfos,
  customAddendas [#],
  rebuildCount,
  sendEmailWhenReady,
