/** @type {import('./$types').PageServerLoad} */
export async function load() {
    async function getData() {
        try {
            const res = await fetch('https://api.akuari.my.id/randomtext/tokohindo');
            const data = await res.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    return { quoteTokohIndo: await getData() }
}