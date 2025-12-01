export default function StructuredData() {
    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'ROSDEV Group',
        url: 'https://rosdevgroup.com',
        logo: 'https://rosdevgroup.com/logo.png',
        description:
            'ROSDEV Group delivers cutting-edge software development, web applications, and digital transformation solutions.',
        foundingDate: '2020',
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'AR',
        },
        contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'Customer Service',
            email: 'contact@rosdevgroup.com',
        },
        sameAs: ['https://linkedin.com/company/rosdev-group', 'https://github.com/rosdev-group'],
    }

    return (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
    )
}
