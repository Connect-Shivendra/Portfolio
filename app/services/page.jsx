// app/services/page.jsx
// Services section has been replaced with Thought Leadership.
// This redirect ensures any old /services links go to the right place.
import { redirect } from 'next/navigation';

export default function ServicesRedirect() {
  redirect('/#thought-leadership');
}
