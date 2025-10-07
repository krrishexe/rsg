'use client';

import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';
import React, { useRef, forwardRef } from 'react';
import { RotatingText } from './rotating-text';
import {
    Stories,
    StoriesContent,
    Story,
    StoryAuthor,
    StoryAuthorImage,
    StoryAuthorName,
    StoryOverlay,
    StoryImage,
} from '@/components/ui/stories-carousel';

interface SectionProps {
    scrollYProgress: MotionValue<number>;
}

const Section1: React.FC<SectionProps> = ({ scrollYProgress }) => {
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
    const titleOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.2]);
    const titleY = useTransform(scrollYProgress, [0, 0.3], [0, -40]);
    const subtitleOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
    const subtitleY = useTransform(scrollYProgress, [0, 0.25], [0, -30]);
    const tickerX = useTransform(scrollYProgress, [0, 1], [0, 60]);
    return (
        <motion.section
            style={{ scale, rotate }}
            className='sticky  font-semibold top-0 h-screen bg-gradient-to-t to-[#dadada] from-[#ebebeb] flex flex-col items-center justify-center text-black'
        >
            <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#EC1C8D2e_1px,transparent_1px),linear-gradient(to_bottom,#EC1C8D2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
            <motion.h1
                style={{ opacity: titleOpacity, y: titleY }}
                className='2xl:text-7xl text-6xl px-8 font-semibold text-center tracking-tight leading-[120%]'
            >
                <RotatingText
                    texts={["Rajasthan", "Paarl", "Barbados"]}
                    mainClassName='inline-flex text-[var(--brand-rose)] mr-2'
                    splitLevelClassName='overflow-hidden'
                    elementLevelClassName='will-change-transform'
                    staggerFrom={'last'}
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    exit={{ y: '-120%' }}
                    staggerDuration={0.04}
                    transition={{ type: 'spring', damping: 40, stiffness: 800 }}
                    rotationInterval={2000}
                />
                <span>Royals.</span>
                <br />
                <strong>One home.</strong>
            </motion.h1>

            <motion.p
                style={{ opacity: subtitleOpacity, y: subtitleY }}
                className='mt-4 text-xl md:text-2xl text-center px-8 max-w-4xl'
            >
                <em>Fans first</em> live form, deep player profiles, and team insights for
                <span className='font-semibold'> Rajasthan</span>,
                <span className='font-semibold'> Paarl</span>, and
                <span className='font-semibold'> Barbados</span> Royals.
            </motion.p>

            <motion.div
                style={{ x: tickerX, opacity: titleOpacity }}
                className='mt-6 flex flex-wrap items-center justify-center gap-3 text-sm'
            >
                <span className='rounded-full bg-black/5 px-3 py-1'>Live stats</span>
                <span className='rounded-full bg-black/5 px-3 py-1'>Player trends</span>
                <span className='rounded-full bg-black/5 px-3 py-1'>Fixtures & results</span>
                <span className='rounded-full bg-black/5 px-3 py-1'>Compare players</span>
            </motion.div>
        </motion.section>
    );
};

// Cricket stories data for the carousel
const cricketStories = [
    {
        id: 1,
        author: 'Rajasthan Royals',
        avatar: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/This_is_the_logo_for_Rajasthan_Royals%2C_a_cricket_team_playing_in_the_Indian_Premier_League_%28IPL%29.svg/640px-This_is_the_logo_for_Rajasthan_Royals%2C_a_cricket_team_playing_in_the_Indian_Premier_League_%28IPL%29.svg.png',
        fallback: 'RR',
        image: 'https://assets.bcci.tv/watermarkoutput/bcci/photos/1860/7c8b4175-3740-4bf4-9b00-3fc8fa0833c0.jpg',
        title: 'Century in IPL 2024',
        link: 'https://www.instagram.com/rajasthanroyals/'
    },
    {
        id: 2,
        author: 'Paarl Royals',
        avatar: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3e/Paarl_Royals_logo.svg/1200px-Paarl_Royals_logo.svg.png',
        fallback: 'PR',
        image: 'https://thenewsmill.com/wp-content/uploads/2025/01/ANI-20250124033856.jpg',
        title: 'Match-winning knock',
        link: 'https://www.instagram.com/paarlroyals/'
    },
    {
        id: 3,
        author: 'Barbados Royals',
        avatar: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/Barbados_Royals_Pink_Logo.svg/1200px-Barbados_Royals_Pink_Logo.svg.png',
        fallback: 'BR',
        image: 'https://www.barbadosroyals.com/static-assets/waf-images/67/de/5d/2-3/Y7nJmA8Lnz.jpg?v=1.22&w=600',
        title: 'Bowling masterclass',
        link: 'https://www.instagram.com/barbadosroyals/'
    },
    {
        id: 4,
        author: 'Barbados Royals Women',
        avatar: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Barbados_Royals_%28WCPL%29_logo.jpg',
        fallback: 'BRW',
        image: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1200,q_50/lsci/db/PICTURES/CMS/366400/366404.jpg',
        title: 'Rising star performance',
        link: 'https://www.instagram.com/barbadosroyals/'
    },
    // {
    //     id: 5,
    //     author: 'Quinton de Kock',
    //     avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face',
    //     fallback: 'QK',
    //     image: 'https://images.unsplash.com/photo-1565186275018-924e4b4fb95a?w=500&auto=format&fit=crop',
    //     title: 'Wicket-keeper heroics'
    // },
];

const Section2: React.FC<SectionProps> = ({ scrollYProgress }) => {
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);
    const headingOpacity = useTransform(scrollYProgress, [0.4, 0.8], [0, 1]);
    const headingY = useTransform(scrollYProgress, [0.4, 0.8], [40, 0]);
    const gridOpacity = useTransform(scrollYProgress, [0.6, 1], [0, 1]);

    return (
        <motion.section
            style={{ scale, rotate }}
            className='relative h-screen bg-gradient-to-t to-[#1a1919] from-[#06060e] text-white '
        >
            <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#EC1C8D2e_1px,transparent_1px),linear-gradient(to_bottom,#EC1C8D2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
            <article className='container mx-auto relative z-10 '>
                <motion.h1
                    style={{ opacity: headingOpacity, y: headingY }}
                    className='text-6xl leading-[100%] py-10 font-semibold tracking-tight'
                >
                    Moments that matter <br /> <span className='italic'>Across Rajasthan, Paarl, Barbados</span>
                </motion.h1>
                <motion.p style={{ opacity: headingOpacity }} className='text-lg text-white/80 max-w-3xl pb-6'>
                    Highlights, top performers, and stories shaping each matchday. Built for fans who want
                    clarity—fast.
                </motion.p>
                <motion.div style={{ opacity: gridOpacity }} className='w-full'>
                    <Stories className="w-full max-w-none">
                        <StoriesContent className="flex gap-8 space-x-4">
                            {cricketStories.map((story) => (
                                <Story className="aspect-[9/16] w-[320px] h-[450px] pl-4" key={story.id}>
                                    <StoryImage
                                        src={story.image}
                                        alt={story.title}
                                        onClick={() => window.open(story.link, '_blank')}
                                    />
                                    <StoryOverlay />
                                    <StoryAuthor>
                                        <StoryAuthorImage
                                            fallback={story.fallback}
                                            name={story.author}
                                            src={story.avatar}
                                            onClick={() => window.open(story.link, '_blank')}
                                        />
                                        <StoryAuthorName>{story.author}</StoryAuthorName>
                                    </StoryAuthor>
                                </Story>
                            ))}
                        </StoriesContent>
                    </Stories>
                </motion.div>
            </article>
        </motion.section>
    );
};

const Component = forwardRef<HTMLElement>((props, ref) => {
    const container = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end'],
    });

    return (
        <>
            <main ref={container} className='relative h-[200vh] bg-black'>
                <Section1 scrollYProgress={scrollYProgress} />
                <Section2 scrollYProgress={scrollYProgress} />

            </main>
        </>
    );
});

Component.displayName = 'Component';

export default Component;


