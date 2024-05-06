import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
    vus: 2, // 2 virtual users
    duration: '5s', // Duration of the test
};

export default function () {
    // Define the base URL of the sample API
    let baseUrl = 'https://jsonplaceholder.typicode.com';

    // --- First API request ---
    // Make an HTTP GET request to retrieve a list of users
    let response1 = http.get(`${baseUrl}/users`);

    // Check if the request was successful
    if (response1.status === 200) {
        // Extract the userId from the first user in the response
        let userId = response1.json()[0].id;

        // --- Second API request ---
        // Use the userId from the first response in the second request
        let response2 = http.get(`${baseUrl}/users/${userId}`);

        // Check if the request was successful
        if (response2.status === 200) {
            console.log('Request 2 successful');
        } else {
            console.log(`Request 2 failed with status code: ${response2.status}`);
        }
    } else {
        console.log(`Request 1 failed with status code: ${response1.status}`);
    }

    sleep(1);
}
