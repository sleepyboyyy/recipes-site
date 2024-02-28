const postData = async (url, data) => {
    try {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!res.ok) {
            throw new Error('Failed to add data');
        }

        const resData = await res.json();
        console.log('New data added: ', resData);
    } catch(err) {
        console.log("Failed to add new data: ", err)
    }
}

export default postData;