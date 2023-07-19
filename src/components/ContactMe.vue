<template>
    <div>
        <div class="border-t border-gray-300 w-[18rem] mx-auto">
        </div>
        <div class="md:grid md:grid-cols-2 ">
            <div class="md:mt-12 md:mx-auto m-8 flex flex-col justify-center gap-4 ">
                <div class="text-base md:mb-4 font-semibold border-b-4 tracking-wide border-yellow-300 w-24"> Contact </div>
                <div class="flex" v-for="(c, i) in coordonnees" :key="i">
                    <div class="text-base font-semibold capitalize w-20 ">
                        {{ c.name }}
                    </div>
                    <span class="">:</span>
                    <div class="text-gray-400 ml-2 "> {{ c.data }}</div>
                </div>
                <div class="flex justify-center gap-4">
                    <a :href="mailtoLink" class="my-auto">
                        <div class="w-[37px] ">
                            <img :src="mail" alt="">
                        </div>
                    </a>
                    <a :href="linkedinLink" >
                        <div class="w-12">
                            <img :src="linkedin" alt="">
                        </div>
                    </a>
                </div>
            </div>
            <div class="flex justify-center m-12">
                <div class="egg p-2 mt-50 md:w-[390px] md:h-[340px] bg-[#fbdb7c] flex justify-center">
                    <img :src="contact" class="md:w-200 md:h-80 mx-auto" alt="">
                </div>
            </div>
        </div>
        <div class="bg-gray-200 text-gray-500 text-center f text-sm p-2">
            © 2023 Made By Ghizlane EL GARMAH
        </div>
    </div>
</template>
<script>
import contactMe from "../assets/img/contactMe.png"
import mail from "../assets/img/mail.png"
import linkedin from "../assets/img/linkedin.png"
export default {
    data() {
        return {
            contact: contactMe,
            coordonnees: [
                { name: 'Email', data: 'Ghizlaneelgarmah99@gmail.com' },
                { name: 'phone', data: '0626835578' },
                { name: 'linkedin', data: 'Ghizlane El Garmah' },

            ],

            mail: mail,
            linkedin: linkedin
        }
    },
    computed: {
        mailtoLink() {
            return `mailto:ghizlaneelgarmah99@gmail.com`;
        },
        linkedinLink() {
            return 'https://www.linkedin.com/in/ghizlane-el-garmah-b357421b6';
        },
    },
}
</script>