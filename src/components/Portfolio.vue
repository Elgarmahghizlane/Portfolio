<template>
    <div>
        <div class="border-t border-gray-300 mb-8 w-[18rem] mx-auto">
        </div>
        <div class="my-8 m-12 text-base md:mx-auto font-semibold border-b-4 tracking-wide border-yellow-300 w-24"> My work
        </div>
        <div class="flex justify-center gap-4 md:gap-8 mx-8">
            <div v-for="(f, i) in filtred" :key="i"
                class="bg-yellow-300 p-2 px-4 md:text-sm text-xs font-semibold rounded-md grid content-center uppercase">{{
                    f }}</div>
        </div>
        <div class="portfolio grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 md:px-28 px-4 my-8">
            <div v-for="(work, index) in mywork" :key="index"
                class="lg-width w-[20rem] mx-auto md:w-auto  md:h-[8rem] text-center cursor-pointer"
                @click="showModal(index)">
                <img :src="work.imageUrl" :alt="work.name" class="h-full w-full border-grey-400 border-2 " />
            </div>
        </div>
        <div v-if="isModalOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div class="modal bg-white rounded-lg flex flex-col ">
                <div @click="closeModal" class=" text-gray-400 flex justify-end cursor-pointer
                ">
                    <span class="bg-slate-100 rounded-full hover:bg-slate-200 hover:rounded-full px-2 mr-2 mt-2">
                        x
                    </span>
                </div>
                <div class="flex items-center justify-between px-8 mx-4 mb-4 gap-4">
                    <div class="p-2 hover:bg-slate-200 hover:rounded-full px-2 mr-2 mt-2" @click="prevImage">
                        <svg fill="none" stroke="gray" stroke-width="1.5" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18">
                            </path>
                        </svg>
                    </div>
                    <div class="carousel p-4 flex justify-center ">
                        <img :src="getScreenshotUrl()" class="carousel-image " />
                    </div>
                    <div class="p-2 hover:bg-slate-200 hover:rounded-full px-2 mr-2 mt-2" @click="nextImage">
                        <svg fill="none" stroke="gray" stroke-width="1.5" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3">
                            </path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script >
import madaris from "../assets/img/Madaris.png"
import codingart from "../assets/img/Codingart.png"
import daba from "../assets/img/Daba.png"
import storeino from "../assets/img/Storeino.png"
import POS from "../assets/img/POS.png"
// Madaris
import accueil from "../assets/img/Madaris/accueil.png"
import elle from "../assets/img/Madaris/elle.png"
import form from "../assets/img/Madaris/form.png"
import maps from "../assets/img/Madaris/maps.png"
import lui from "../assets/img/Madaris/lui.png"
import msg from "../assets/img/Madaris/msg.png"
import wtsp from "../assets/img/Madaris/wtsp.png"
// daba
import home from "../assets/img/daba/home.png"
import admin from "../assets/img/daba/admin.png"
import adminSec from "../assets/img/daba/admin2.png"
import contact from "../assets/img/daba/contact.png"
import about from "../assets/img/daba/about.png"
import add from "../assets/img/daba/add.png"
import adminAdd from "../assets/img/daba/adminAdd.png"
import inbox from "../assets/img/daba/inbox.png"
import header from "../assets/img/daba/header.png"
import single from "../assets/img/daba/single.png"
import prod from "../assets/img/daba/prod.png"
// storeino
import homeS from "../assets/img/storeino/home.png"
import singleProd from "../assets/img/storeino/singleProd.jpg"
import singleProdS from "../assets/img/storeino/singleProdS.jpg"
import wishlist from "../assets/img/storeino/wishlist.jpg"
import addWishlist from "../assets/img/storeino/addWishlist.png"
import card from "../assets/img/storeino/card.jpg"
import cat from "../assets/img/storeino/categ.jpg"
import formS from "../assets/img/storeino/formS.jpg"
// etours
import landing from "../assets/img/etours/landingPage.png"
import acc from "../assets/img/etours/acc.png"
import bed from "../assets/img/etours/bed.png"
import bedInv from "../assets/img/etours/bedInv.png"
import bedInvCal from "../assets/img/etours/benInvCal.png"
import property from "../assets/img/etours/property.png"
import reserv from "../assets/img/etours/reserv.png"
import exp from "../assets/img/etours/exp.png"
import plan from "../assets/img/etours/plan.png"
import cutoff from "../assets/img/etours/cutOff.png"
// pos
import pos from "../assets/img/pos/pos.png"
import HomePos from "../assets/img/pos/HomePos.png"
import caisse from "../assets/img/pos/caisse.png"
import table from "../assets/img/pos/table.png"
import serveur from "../assets/img/pos/serveur.png"
import tickets from "../assets/img/pos/tickets.png"
import singleT from "../assets/img/pos/singleT.png"
import addClient from "../assets/img/pos/addClient.png"
//SMMA
import smma from "../assets/img/smma.png"
import smmaFlyer from "../assets/img/smmaFlyer.png"

export default {
    data() {
        return {
            isModalOpen: false,
            currentIndex: 0,
            currentScreenshotIndex: 0,
            mywork: [
                {
                    name: "Madaris",
                    imageUrl: madaris,
                    madarisScreenshot: [
                        { imageUrl: accueil },
                        { imageUrl: lui },
                        { imageUrl: elle },
                        { imageUrl: maps },
                        { imageUrl: form },
                        { imageUrl: msg },
                        { imageUrl: wtsp },
                    ],
                },
                {
                    name: "Codingart",
                    imageUrl: codingart,
                    madarisScreenshot: [
                        { imageUrl: landing },
                        { imageUrl: acc },
                        { imageUrl: bed },
                        { imageUrl: bedInv },
                        { imageUrl: bedInvCal },
                        { imageUrl: property },
                        { imageUrl: reserv },
                        { imageUrl: exp },
                        { imageUrl: plan },
                        { imageUrl: cutoff },
                    ],
                },
                {
                    name: "Daba",
                    imageUrl: daba,
                    madarisScreenshot: [
                        { imageUrl: home },
                        { imageUrl: header },
                        { imageUrl: prod },
                        { imageUrl: single },
                        { imageUrl: add },
                        { imageUrl: about },
                        { imageUrl: contact },
                        { imageUrl: admin },
                        { imageUrl: adminSec },
                        { imageUrl: inbox },
                        { imageUrl: adminAdd },
                    ],
                },
                {
                    name: "Storeino",
                    imageUrl: storeino,
                    madarisScreenshot: [
                        { imageUrl: homeS },
                        { imageUrl: singleProd },
                        { imageUrl: singleProdS },
                        { imageUrl: addWishlist },
                        { imageUrl: wishlist },
                        { imageUrl: card },
                        { imageUrl: cat },
                        { imageUrl: formS },
                    ],
                },
                {
                    name: "POS",
                    imageUrl: POS,
                    madarisScreenshot: [
                        { imageUrl: pos },
                        { imageUrl: HomePos },
                        { imageUrl: caisse },
                        { imageUrl: table },
                        { imageUrl: serveur },
                        { imageUrl: tickets },
                        { imageUrl: singleT },
                        { imageUrl: addClient },
                    ],
                },
                {
                    name: "SMMA",
                    imageUrl: smmaFlyer,
                    madarisScreenshot: [
                        { imageUrl: smma },
                    ]
                }],
            filtred: ['ALL', 'FullSTACK', 'FRONT-END']
        };
    },
    methods: {
        showModal(index) {
            this.isModalOpen = true;
            this.currentIndex = index;
            this.currentScreenshotIndex = 0;
            window.addEventListener("keydown", this.handleKeyDown);
        },
        closeModal() {
            this.isModalOpen = false;
            window.removeEventListener("keydown", this.handleKeyDown);
        },
        getScreenshotUrl() {
            const work = this.mywork[this.currentIndex];
            return work.madarisScreenshot[this.currentScreenshotIndex].imageUrl;
        },

        getCurrentScreenshotName() {
            const work = this.mywork[this.currentIndex];
            return work.madarisScreenshot[this.currentScreenshotIndex].name;
        },

        prevImage() {
            const work = this.mywork[this.currentIndex];
            this.currentScreenshotIndex = (this.currentScreenshotIndex - 1 + work.madarisScreenshot.length) % work.madarisScreenshot.length;
        },

        nextImage() {
            const work = this.mywork[this.currentIndex];
            this.currentScreenshotIndex = (this.currentScreenshotIndex + 1) % work.madarisScreenshot.length;
        },
        handleKeyDown(event) {
            if (this.isModalOpen) {
                if (event.key === "ArrowLeft") {
                    this.prevImage();
                } else if (event.key === "ArrowRight") {
                    this.nextImage();
                }
            }
        },
    },
}

</script>
<style scoped>
@media (min-width: 1024px) {
    .portfolio {
        width: 70rem;
        margin-left: auto;
        margin-right: auto;
    }

    .lg-width {
        width: 17rem;
        height: 10rem;

    }
}

.carousel-image {
    max-height: 500px;
}

.modal {
    width: 80%;
}

svg {
    width: 1rem;
    height: 1rem;
}
</style>
