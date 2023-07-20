import Modal from "@/components/Modal";

export default function AlbumLayout({ children, tracks, artist, album }) {
  return (
    <Modal>
      <div className="container flex flex-wrap mx-auto">
        {children}
        {album}
        <div className="w-3/4 p-2 flex flex-col">
          {artist}
          {tracks}
        </div>
      </div>
    </Modal>
  );
}
