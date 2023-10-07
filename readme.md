# Car management dashboard

Merupakan aplikasi untuk manajemen data car.

## Database Diagram

aplikasi ini menggunakan MongoDB sebagai database nya dan ini adalah diagramnya:
![diagram](public/images/cars.png)

### untuk menjalankan aplikasi ini lakukan langkah-langkah berikut

1. git clone ..
2. npm install
3. buat file .env, copy env variable dari .env.example
4. npm run dev

#### API

port= localhost:8000

**View**

- `/dashboard`(GET) = halaman menampilkan semua data car
- `/dashboard/create` (GET) = ini halaman untuk create new car
- `/dashboard/edit/:id` (GET) = ini halaman untuk edit car

**Action API**

- `/cars/add` (POST) = ini API action untuk create new car
- `/cars/update/:id` (POST) = ini API action untuk update car
- `/cars/delete/:id` (POST) = ini API action untuk delete car
