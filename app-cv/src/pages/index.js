import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-start p-20 ${inter.className}`}
    >
      <div className="z-10 max-w-5xl w-full items-center justify-center mb-6 font-mono lg:flex">
        <h1 className="justify-center uppercase text-5xl font-bold">
          tabel data cv
        </h1>
      </div>

      <div className="flex z-10 flex-col w-full justify-center font-serif lg:flex">
        {/* Button Tambah */}
        <div className="mb-4">
          <button
            className="btn btn-sm btn-accent"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            Tambah
          </button>
          {/* Modal Tambah */}
          <dialog id="my_modal_1" class="modal modal-bottom sm:modal-middle">
            <div class="modal-box">
              <h1 className="font-bold text-2xl text-center mb-4">
                Input Data
              </h1>
              <form method="POST" id="new-data">
                {/* Nama */}
                <label className="label">
                  <span className="label-text">Nama</span>
                </label>
                <input
                  type="text"
                  placeholder="Masukkan Nama Lengkap"
                  className="input input-bordered w-full max-w-ms"
                  id="nama"
                />
                <br />
                {/* Email */}
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Masukkan Email"
                  className="input input-bordered w-full max-w-ms"
                  id="email"
                />
                <br />
                {/* No Telp */}
                <label className="label">
                  <span className="label-text">No Telp</span>
                </label>
                <input
                  type="text"
                  placeholder="Masukkan No Telp"
                  className="input input-bordered w-full max-w-ms"
                  id="no-telp"
                  pattern="0-9"
                  maxLength={13} 
                />
                <br />
                {/* Alamat */}
                <label className="label">
                  <span className="label-text">Alamat</span>
                </label>
                <input
                  type="text"
                  placeholder="Masukkan Alamat Anda"
                  className="input input-bordered w-full max-w-ms"
                  id="alamat"
                />
                <br />
                {/* Tanggal Lahir */}
                <label className="label">
                  <span className="label-text">Tanggal Lahir</span>
                </label>
                <input
                  type="date"
                  className="input input-bordered w-full max-w-ms"
                  id="tgl-lahir"
                />
                <br />
                {/* Jenis Kelamin */}
                <label className="label">
                  <span className="label-text">Jenis Kelamin</span>
                </label>
                <select className="select select-bordered w-full max-w-ms">
                  <option disabled selected>
                    Jenis Kelamin
                  </option>
                  <option>Laki-Laki</option>
                  <option>Perempuan</option>
                </select>
                <br />
                {/* Pendidikan Terakhir */}
                <label className="label">
                  <span className="label-text">Pendidikan Terakhir</span>
                </label>
                <select className="select select-bordered w-full max-w-ms">
                  <option disabled selected>
                    Pendidikan
                  </option>
                  <option>S3</option>
                  <option>S2</option>
                  <option>S1</option>
                  <option>D4</option>
                  <option>D3</option>
                  <option>SMA/sederajat</option>
                  <option>SMP/sederajat</option>
                  <option>SD/MI</option>
                </select>
                <br />
                {/* Deskripsi Singkat */}
                <label className="label">
                  <span className="label-text">Deskripsi Singkat</span>
                </label>
                <textarea
                  placeholder="Deskripsikan Diri Anda"
                  className="input input-bordered w-full max-w-ms"
                  id="deskripsi-singkat"
                ></textarea>
                <button type="submit" className="btn btn-success btn-sm mr-1">
                  Submit
                </button>
                <button
                  type="button"
                  className="btn btn-error btn-sm"
                  onClick={() => document.getElementById("my_modal_1").close()}
                >
                  Cancel
                </button>
              </form>

              {/* <div class="modal-action">
                <form method="dialog">
                  <button class="btn">Cancel</button>
                </form>
              </div> */}
            </div>
          </dialog>
        </div>

        {/* Table */}
        <table className="table-auto border-black text-center">
          <thead>
            <tr>
              <th class="border-2 border-b-black px-2">No</th>
              <th class="border-2 border-b-black px-2">Nama</th>
              <th class="border-2 border-b-black px-2">Email</th>
              <th class="border-2 border-b-black px-2">No Telp</th>
              <th class="border-2 border-b-black px-2">Alamat</th>
              <th class="border-2 border-b-black px-2">Tanggal Lahir</th>
              <th class="border-2 border-b-black px-2">Jenis Kelamin</th>
              <th class="border-2 border-b-black px-2">Pendidikan Terakhir</th>
              <th class="border-2 border-b-black px-2">Deskripsi Singkat</th>
              <th class="border-2 border-b-black px-2">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border-2 border-b-black">1.</td>
              <td class="border-2 border-b-black">Almer</td>
              <td class="border-2 border-b-black">a@gmail.com</td>
              <td class="border-2 border-b-black">081</td>
              <td class="border-2 border-b-black">Bandung</td>
              <td class="border-2 border-b-black">01-10-2002</td>
              <td class="border-2 border-b-black">Laki - laki</td>
              <td class="border-2 border-b-black">Sarjana</td>
              <td class="border-2 border-b-black">Saya adalah orang baik</td>
              <td class="border-2 border-b-black py-2">
                <button className="btn btn-info btn-sm mr-1">Edit</button>
                <button className="btn btn-error btn-sm">Delete</button>
              </td>
            </tr>
            <tr>
              <td class="border-2 border-b-black">2.</td>
              <td class="border-2 border-b-black">Galang</td>
              <td class="border-2 border-b-black">b@gmail.com</td>
              <td class="border-2 border-b-black">081</td>
              <td class="border-2 border-b-black">Bandung</td>
              <td class="border-2 border-b-black">01-10-2001</td>
              <td class="border-2 border-b-black">Laki - laki</td>
              <td class="border-2 border-b-black">Magister</td>
              <td class="border-2 border-b-black">Saya adalah orang baik</td>
              <td class="border-2 border-b-black p-1">
                <button className="btn btn-info btn-sm mr-1">Edit</button>
                <button className="btn btn-error btn-sm">Delete</button>
              </td>
            </tr>
            <tr>
              <td class="border-2 border-b-black">3.</td>
              <td class="border-2 border-b-black">Bariz</td>
              <td class="border-2 border-b-black">c@gmail.com</td>
              <td class="border-2 border-b-black">081</td>
              <td class="border-2 border-b-black">Bandung</td>
              <td class="border-2 border-b-black">01-10-2000</td>
              <td class="border-2 border-b-black">Perempuan</td>
              <td class="border-2 border-b-black">Doktor</td>
              <td class="border-2 border-b-black">Saya adalah orang baik</td>
              <td class="border-2 border-b-black p-1">
                <button className="btn btn-info btn-sm mr-1">Edit</button>
                <button className="btn btn-error btn-sm">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Discover and deploy boilerplate example Next.js&nbsp;projects.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}
    </main>
  );
}
