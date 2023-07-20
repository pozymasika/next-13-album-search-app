export default function TracksLoadingSkeleton() {
  return (
    <div className="animate-pulse w-full flex flex-col">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-5">
        <colgroup>
          <col style={{ width: "10%" }} />
          <col style={{ width: "90%" }} />
        </colgroup>
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              #
            </th>
            <th scope="col" className="px-6 py-3">
              Track Name
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2 ml-2"></div>
            </th>
            <td className="px-6 py-4">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2 ml-2"></div>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2 ml-2"></div>
            </th>
            <td className="px-6 py-4">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2 ml-2"></div>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2 ml-2"></div>
            </th>
            <td className="px-6 py-4">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2 ml-2"></div>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2 ml-2"></div>
            </th>
            <td className="px-6 py-4">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2 ml-2"></div>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2 ml-2"></div>
            </th>
            <td className="px-6 py-4">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2 ml-2"></div>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2 ml-2"></div>
            </th>
            <td className="px-6 py-4">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2 ml-2"></div>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2 ml-2"></div>
            </th>
            <td className="px-6 py-4">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2 ml-2"></div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
