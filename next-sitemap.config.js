/** @type {import('next-sitemap').IConfig} */

const SITE_URL = process.env.FRONT_URL || 'https://vival.alexandrevurbier.com';

module.exports = {
    siteUrl: SITE_URL,
    generateRobotsTxt: true,
}