import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://kics.edu.pk';
const DEFAULT_IMAGE = 'https://kics.edu.pk/web/wp-content/uploads/2018/02/unnamed.png';
const SITE_NAME = 'KICS UET Lahore';

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Al-Khwarizmi Institute of Computer Science',
  alternateName: 'KICS',
  url: BASE_URL,
  logo: DEFAULT_IMAGE,
  description:
    'KICS is a leading applied research institution at UET Lahore, Pakistan, advancing AI, cybersecurity, IoT, and software engineering.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'G.T. Road',
    addressLocality: 'Lahore',
    addressRegion: 'Punjab',
    addressCountry: 'PK',
  },
  telephone: '+92-42-99029450',
  email: 'info@kics.edu.pk',
  sameAs: [
    'https://facebook.com/kics.official',
    'https://twitter.com/KICSUETLAHORE',
    'https://linkedin.com/company/kics',
  ],
};

export default function SEO({
  title,
  description = 'KICS is a leading applied computer science research institution at UET Lahore, advancing AI, cybersecurity, IoT and enterprise software.',
  image = DEFAULT_IMAGE,
  type = 'website',
  breadcrumbs = [],
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — Al-Khwarizmi Institute of Computer Science`;

  const breadcrumbSchema = breadcrumbs.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
          ...breadcrumbs.map((b, i) => ({
            '@type': 'ListItem',
            position: i + 2,
            name: b.label,
            ...(b.url ? { item: `${BASE_URL}${b.url}` } : {}),
          })),
        ],
      }
    : null;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={BASE_URL} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
      {breadcrumbSchema && (
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      )}
    </Helmet>
  );
}
