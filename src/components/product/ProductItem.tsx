import '@app/globals.css';
import Image from 'next/image';
import productKeroro from 'assets/images/productKeroro.jpg';
import { HeartIcon } from 'lucide-react';
import { Addfunding, SpecialPlan } from '@components/common/etc';

interface ProductItemProps {
  className?: string;
}

export function ProductItem({ className }: ProductItemProps) {
  return (
    <div className={`flex flex-col gap-[15px] tablet:gap-5 normal-14 h-full w-full  ${className || ''}`}>
      {/* 썸네일 */}
      <div className="relative">
        <Image
          width={400}
          height={400}
          className="w-full h-[194px] rounded-2xl object-cover cursor-pointer"
          src={productKeroro}
          alt="/"
          priority
        />
        <div className="absolute group right-4 bottom-4">
          <HeartIcon
            className="w-[30px] h-[30px] hover:text-red-500 hover:fill-red-500 cursor-pointer"
            strokeWidth={1.5}
          />
        </div>
      </div>

      <div className="space-y-2.5 tablet:space-y-5">
        {/* 달성율, 디데이 */}
        <div className="flex gap-1 font-bold tablet:text-[20px] laptop:text-[24px]">
          <p className="text-primary-800 ">5,394% 달성</p>
          <p className="text-font-400">D-7</p>
        </div>

        {/* 제품명, 가격 */}
        <div className="tablet:text-[14px] laptop:text-[18px] flex flex-col gap-1.5">
          <p className="text-font-900 font-bold ">개구리 중사 케로케로케로케로 티셔츠</p>
          <p className="text-font-900">500,000원</p>
        </div>

        {/* 회사명 */}
        <p className="text-font-400 tablet:text-[14px] laptop:text-[18px]">(주) 1더하기1은귀요미</p>
      </div>
    </div>
  );
}

//상품 컴포넌트
export function Product() {
  return (
    <div className="flex flex-col normal-10 h-[full] w-[180px]">
      {/* 썸네일 */}
      <div className="relative w-[180px] h-[105px] overflow-hidden">
        <Image className="w-full h-full object-cover" src={productKeroro} alt="상품 썸네일" />
        <div className="absolute right-[8px] bottom-[8px]">
          <HeartIcon className="w-[20px] h-[18px] hover:text-red-500 hover:fill-red-500" strokeWidth={1.5} />
        </div>
      </div>

      <div>
        {/* 달성율, 디데이 */}
        <div className="flex gap-1 bold-14 mt-[10px] mb-[8px]">
          <p className=" text-primary-800 ">5,394% 달성</p>
          <p className="text-font-400">D-7</p>
        </div>

        {/* 제품명, 가격 */}
        <div className="space-y-[4px]">
          <p className="bold-14 text-font-900 ">개구리 중사 케로케로케로케로 티셔츠</p>
          <p className="semibold-14 text-font-900">500,000원</p>
        </div>

        {/* 회사명 */}
        <p className="mt-[12px] medium-12 text-font-400 ">(주) 1더하기1은귀요미</p>
      </div>
    </div>
  );
}

// 관리자 승인 상품 컴포넌트
export function AdminApproveProduct() {
  return (
    <div className="flex flex-col normal-10 h-[full] w-[176px]">
      {/* 썸네일 */}
      <div className="relative w-[176px] h-[105px] mb-[16px] overflow-hidden">
        <Image className="w-full h-full object-cover" src={productKeroro} alt="상품 썸네일" />
        <div className="absolute right-[8px] bottom-[8px]">
          <HeartIcon className="w-[20px] h-[18px] hover:text-red-500 hover:fill-red-500" strokeWidth={1.5} />
        </div>
      </div>

      <div>
        {/* 제품명, 가격 */}
        <div className="space-y-[4px]">
          <p className="bold-13 text-font-900 ">개구리 중사 케로케로케로케로 티셔츠</p>
          <p className="medium-11 text-font-900">목표 금액 : 500,000원</p>
        </div>

        {/* 회사명 */}
        <p className="mt-[12px] medium-12 text-font-400 ">(주) 1더하기1은귀요미</p>
      </div>
    </div>
  );
}
interface mainProductWrapProps {
  title?: string;
}

export function MainProductWrap({ title }: mainProductWrapProps) {
  return (
    <>
      <div className="flex  w-full justify-between items-center mb-[10px] ">
        <SpecialPlan title={title} />
        <Addfunding />
      </div>
      <div className="flex justify-center gap-8">
        <ProductItem className="w-full" />
        <ProductItem className="w-full  hidden mobile:flex" />
        <ProductItem className="w-full  hidden tablet:flex " />
        <ProductItem className="w-full  hidden min-[930px]:flex" />
      </div>
    </>
  );
}

export function PurchaseHistoryItemWrap() {
  return (
    <>
      <div className="flex justify-center gap-4">
        <ProductItem className="w-full" />
        <ProductItem className="w-full  hidden mobile:flex" />
        <ProductItem className="w-full  hidden tablet:flex " />
        <ProductItem className="w-full  hidden min-[930px]:flex" />
      </div>
    </>
  );
}

export function PurchaseHistoryItemWrapContainer() {
  return (
    <>
      <div className="flex flex-col gap-[10px]">
        <PurchaseHistoryItemWrap />
        <PurchaseHistoryItemWrap />
        <PurchaseHistoryItemWrap />
        <PurchaseHistoryItemWrap />
      </div>
    </>
  );
}
