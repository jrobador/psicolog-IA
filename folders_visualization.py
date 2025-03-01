#%%
import os

def display_tree(startpath, indent=''):
    for item in os.listdir(startpath):
        path = os.path.join(startpath, item)
        if os.path.isdir(path):
            print(f"{indent}├── {item}/")
            display_tree(path, indent + '    ')
        else:
            print(f"{indent}├── {item}")

if __name__ == "__main__":
    startpath = '.'  # Change this to the directory you want to visualize
    display_tree(startpath)
# %%
