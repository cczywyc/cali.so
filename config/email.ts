export const emailConfig = {
  from: 'cczywyc@gmail.com',
  baseUrl:
    process.env.VERCEL_ENV === 'production'
      ? `https://cczywyc.com`
      : 'http://localhost:3000',
}
