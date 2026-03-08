import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <header>
        <h1>Feliz dia da mulher, Te amo</h1>
      </header>

      <section>
        <Image 
          src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjcwY3Vxd21zOGwzNjJ5OGN5a2lldDd6MTFyajR2cW84d2YxOHQ1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/t8xgPfC5oNIRMrNooe/giphy.gif" 
          alt="Um lindo buquê de flores animado" 
          width={480} 
          height={480}
          unoptimized={true}
          style={{ 
            maxWidth: '100%', 
            height: 'auto', 
            borderRadius: '15px', 
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)' 
          }} 
        />
      </section>
    </main>
  );
}