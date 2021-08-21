const Bill = (props) => {
  return (
    <div className="Bill">
      {/* <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div class="flex-shrink-0">
          <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo" />
        </div>
        <div>
          <div class="text-xl font-medium text-black">ChitChat</div>
          <p class="text-gray-500">You have a new message!</p>
        </div>
      </div> */}

      <div className="py-2 px-6 max-w-sm mx-auto rounded-md shadow-md bg-white">
        <div className="flex justify-between text-lg">
          <div className="text-blue-900 uppercase font-semibold">{props.name}</div>
          <div className="rounded-full text-white bg-blue-900 h-7 w-7 flex justify-center">P</div>
        </div>
      </div>

    </div>
  );
};

export default Bill;
