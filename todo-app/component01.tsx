import { useState } from 'react';
import Component02 from './component02';

export default function Component01() {
  const [score, setScore] = useState<number>(90);
  const [studentName, setStudentName] = useState<string>('Farhan')

  return (
    <>
      <Component02 
        bebas={score}
        studentName={studentName}
      />
    </>
  );
}
