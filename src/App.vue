<template>
    <div>
        <div class="flex flex-col min-h-screen font-Roboto bg-[rgb(247,248,248)]  w-full">
            <NavBar @menu-item-clicked="scrollToSection" />
            <div ref="headSection">
                <HeadSection />
            </div>
            <div ref="aboutSection">
                <About />
            </div>
            <div ref="portfolioSection">
                <Portfolio />
            </div>
            <div ref="contactMe">
                <ContactMe />
            </div>
            <RouterView />
        </div>
    </div>
</template>
<script>
import { RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
import HeadSection from './components/HeadSection.vue';
import About from './components/About.vue';
import Portfolio from './components/Portfolio.vue';
import ContactMe from './components/ContactMe.vue';
export default {
    components: {
        NavBar, HeadSection, About, Portfolio,ContactMe
    },
    methods: {
        scrollToSection(sectionRef) {
            const section = this.$refs[sectionRef];
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        },
    },
};
</script>