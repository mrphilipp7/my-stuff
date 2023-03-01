import { UserCircleIcon, LockClosedIcon } from "@heroicons/react/20/solid";
import { useForm } from "react-hook-form";

const dashboard = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  //data is object to pass to API
  const onSubmit = (data) => console.log(data);

  return (
    <div className="relative flex h-screen bg items-center">
      <div className=" flex justify-center">
        <div className="backdrop-blur-xl bg-white/30 p-14 sm:p-24 text-center rounded-md border-white/10 border-2 shadow-sm shadow-gray-300">
          <h1 className="text-4xl text-white font-bold">Dashboard</h1>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-4">
              {/* //username// */}
              <div className="py-4 bg-transparent w-60">
                <div className="relative w-full">
                  <input
                    type="text"
                    required
                    {...register("userName", { required: true })}
                    className={`border-b-4 outline-none shadow-sm pt-2 peer w-full text-white border-white pb-2 bg-transparent`}
                  />
                  <span
                    className={`text-white absolute left-0 bottom-3 peer-focus:-translate-y-7  transition duration-150 ease-in-out pointer-events-none peer-valid:-translate-y-7`}
                  >
                    Username
                  </span>
                  <div className="absolute w-6 h-6 text-white right-1 bottom-3">
                    <UserCircleIcon />
                  </div>
                </div>
                {errors.userName && <span>Username is required</span>}
              </div>
              {/* //password// */}
              <div className="py-4 bg-transparent w-60">
                <div className="relative w-full">
                  <input
                    type="password"
                    required
                    {...register("password", { required: true })}
                    className={`border-b-4 outline-none shadow-sm pt-2 peer w-full text-white border-white pb-2 bg-transparent`}
                  />
                  <span
                    className={`text-white absolute left-0 bottom-3 peer-focus:-translate-y-7  transition duration-150 ease-in-out pointer-events-none peer-valid:-translate-y-7`}
                  >
                    Password
                  </span>
                  <div className="absolute w-6 h-6 text-white right-1 bottom-3">
                    <LockClosedIcon />
                  </div>
                </div>
                {errors.password && <span>Password is required</span>}
              </div>
            </div>
            <div className="flex justify-center space-x-4">
              <input type="checkbox" {...register("remember")} />
              <p className="text-white">Remember me?</p>
            </div>
            <input
              type="submit"
              value="LOGIN"
              className="w-60 py-2 bg-white text-black tracking-widest font-semibold hover:opacity-80 active:opacity-70"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default dashboard;
