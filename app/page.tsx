import NotesList from './components/notes-list'

export default function page() {
  return (
    <main>
      <div className="m-10 text-center">
        <p>Hello World</p>
        {/* @ts-ignore*/}
        <NotesList />
      </div>
    </main>
  )
}
