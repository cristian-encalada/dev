import { MDXLayoutRenderer } from '@/components/MDXComponents';
import UsesLayout from '@/layouts/MDX/UsesLayout';
import MainLayout from '@/layouts/MainLayout';
import { allAuthors } from 'contentlayer/generated';

export const metadata = {
  title: 'Uses - Cristian Encalada',
  description: 'What I Use - Cristian Encalada',
};

export default function Uses() {
  const author = allAuthors.find((p) => p.slug === 'uses');

  if (!author) {
    return null;
  }

  return (
    <MainLayout>
      <UsesLayout>
        <MDXLayoutRenderer content={author} />
      </UsesLayout>
    </MainLayout>
  );
}
