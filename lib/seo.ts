export const seo = {
  title: 'cczywyc | 一个爱折腾的人',
  description:
    '我叫 王有成，网名叫 cczywyc。一个爱折腾的人。喜欢折腾各种技术，现在还很菜，正在变强中。',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://cali.so'
      : 'http://localhost:3000'
  ),
} as const
