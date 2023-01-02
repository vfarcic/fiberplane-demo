import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 100,
  duration: '60s',
};

export default function () {
  http.get('http://silly-demo.34.139.255.55.nip.io');
  sleep(1);
}

