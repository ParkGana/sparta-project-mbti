import { mbtiDescriptions } from '../data/descriptions';
import Button from '../components/Button';

export default function Result() {
    return (
        <div className="flex justify-center p-10">
            <div className="flex flex-col items-center gap-10 bg-white rounded-lg shadow-lg p-8">
                <p className="text-4xl text-black font-bold">테스트 결과 모아보기</p>
                <div className="max-w-screen-sm border-4 border-primary rounded-lg">
                    <div className="flex justify-between border-b border-primary p-4">
                        <p className="text-base text-black font-bold">가나</p>
                        <p className="text-base text-gray-500">2024-11-26 18:35:20</p>
                    </div>
                    <div className="flex flex-col gap-4 p-4">
                        <p className="text-xl text-primary font-bold">ISTJ</p>
                        <p className="text-base text-black">{mbtiDescriptions['ISTJ']}</p>
                        <div className="flex justify-center gap-4">
                            <Button category="box" label="비공개로 전환" handleClick={() => {}} />
                            <Button category="box" label="삭제" handleClick={() => {}} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
