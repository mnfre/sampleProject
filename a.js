<script src="https://cdn.jsdelivr.net/gh/mnfre/sampleProject@main/a.js"></script>


async function sendRequests() {
    try {
        // First step call Csrf-Token by create variable and used var name in the headers
        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

        // Execute POST request that convert requester ==> Agent 
        await fetch('https://akfinfocity09090208.freshcmdb.com/itil/requesters/20390480/make_agent', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-Csrf-Token': csrfToken
            },
            body: '_method=put'
        });
        console.log(csrfToken);
        console.log('Requests completed successfully');
    } catch (error) {
        console.error('Error:', error);
    }
}

sendRequests();
