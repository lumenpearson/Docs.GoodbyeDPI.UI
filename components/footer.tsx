import { HeartIcon, WrenchIcon } from 'lucide-react';

import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';

export function Footer() {
	return (
		<footer className="border-t w-full h-16 overflow-hidden">
			<div className="container flex items-center sm:justify-between justify-center sm:gap-0 gap-4 h-full text-muted-foreground flex-wrap sm:py-0 py-3 max-sm:px-4">
				<div className="flex items-center gap-3">
					<WrenchIcon className="sm:block hidden w-5 h-5 text-muted-foreground" />
					<p className="sm:text-sm text-xs text-center">
						Документация создана с помощью{' '}
						<Link
							className="px-0.5 underline underline-offset-2"
							href="https://github.com/CodeIlluminators"
						>
							CodeIlluminators
						</Link>
						. Исходный код доступен на{' '}
						<Link
							className="px-0.5 underline underline-offset-2"
							href="https://github.com/CodeIlluminators/Docs.GoodbyeDPI.UI"
						>
							GitHub
						</Link>
						.
					</p>
				</div>
				<div className="gap-4 items-center hidden md:flex">
					<FooterButtons />
				</div>
			</div>
		</footer>
	);
}

export function FooterButtons() {
	return (
		<>
			<Link
				href="https://github.com/sponsors/Storik4pro"
				className={buttonVariants({ variant: 'outline', size: 'sm' })}
			>
				<HeartIcon className="h-4 w-4 mr-2 text-red-600 fill-current" />
				Поддержать
			</Link>
		</>
	);
}
