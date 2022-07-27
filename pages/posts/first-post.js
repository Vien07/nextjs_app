import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import Layout from '../../components/layout'

const YourComponent = () => (
    <Image
        src="/images/Me.jpg" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="Your Name"
    />
)
export default function FirstPost() {
    return (
        <>
            <Layout>
                <Head>
                    <title>First-post</title>
                </Head>

                <h1>First Post</h1>
                <h2>
                    <Link href="/">
                        <a>Back to home</a>
                    </Link>
                </h2>
            </Layout>
        </>
    );
}