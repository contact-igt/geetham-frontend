import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const size = {
    width: 32,
    height: 32,
}
export const contentType = 'image/png'

// Image generation
export default async function Icon() {
    const logoData = await fetch(new URL('../../public/assets/logo.png', import.meta.url)).then(
        (res) => res.arrayBuffer()
    )

    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    background: 'white',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '4px', // Slight rounding for a nicer look
                    padding: '2px', // Give the logo some breathing room
                }}
            >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={logoData as any} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
        ),
        // ImageResponse options
        {
            ...size,
        }
    )
}
