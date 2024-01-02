/** @type {import('./$types').PageLoad} */
export async function load() {
    async function getData() {
        try {
            const res = await fetch('https://api.akuari.my.id/randomtext/katabijak');
            const data = await res.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    return { quoteBijak: await getData() }
}